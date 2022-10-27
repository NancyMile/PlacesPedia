const User = require('../models/userModel')
//login
const loginUser = async (req, res) => {
//set back the response
res.json({message: 'Login!!'})
}
//sign up
const signupUser = async (req, res) =>{
    //set back the response
    res.json({message: 'Signup!!'})
    }
module.exports = { loginUser, signupUser }