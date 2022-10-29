const jwt = require('jsonwebtoken')
const User = require ('../models/userModel')
const requireAuth = async (req, res, next) => {
    //check the authentication property from the request headers
    const { authorization } = req.headers
    //check if it has value
    if(!authorization){
        return res.status(401).json({error: 'Auth token required'})
    }
    //get the token, by spliting the string, and take position one
    const token = authorization.split(' ')[1]
    //verify the token using jwt
    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        //use this id to find the user on db and just return the id
        req.user = await User.findOne({ _id }).select('_id')
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({error: 'Req no authorized'})
    }
}

module.exports = requireAuth