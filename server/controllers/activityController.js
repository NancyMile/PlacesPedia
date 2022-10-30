const Activity = require('../models/activityModel')
const mongoose  = require('mongoose')

//get all activities
const getActivities = async (req,res) => {
    //find  only the activities of the current user
    const user_id = req.user._id
    const activities = await Activity.find({user_id}).sort({createdAt: -1})
    return res.status(200).json(activities)
}

//get single activity
 const  getActivity = async (req,res) => {
    const {id} = req.params
//check if is valid type of id
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No found that kind of id'})
}

    const activity = await Activity.findById(id)
    if (!Activity){
        return res.status(404).json({error: 'Cant be found'})
    }
    res.status(200).json(activity)
 }

//create activity
const createActivity = async (req,res) => {
    const {title, comment} = req.body
    //validate which fiekds are empty for displayig errors
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!comment){
        emptyFields.push('comment')
    }
    //count for any empty fields
    if(emptyFields.length > 0){
        return res.status(400).json({error:'Please fill everything',emptyFields})
    }

    //add doc to database
    try{
        //add the id of the user from req
        const user_id = req.user._id
        const activity = await Activity.create({title, comment, user_id})
        res.status(200).json(activity)
    }catch(error){
       res.status(400).json({error: error.message})
    }
}

//delete activity
const deleteActivity = async (req,res) => {
    const {id} = req.params
    //check if is valid type of id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No found that kind of id'})
    }
    const activity = await Activity.findOneAndDelete({_id: id})
    if (!Activity){
        return res.status(404).json({error: 'Cant be found'})
    }
    res.status(200).json(activity)

}

//update activity
const updateActivity = async (req,res) => {
    const {id} = req.params
    //check if is valid type of id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No found that kind of id'})
    }
    const activity = await Activity.findOneAndUpdate({_id: id},{
        //spread property of the body
        ...req.body
    })
    
    if (!Activity){
        return res.status(404).json({error: 'Cant be found'})
    }
    res.status(200).json(activity)
}

//export functions
module.exports = {
    createActivity,
    getActivities,
    getActivity,
    deleteActivity,
    updateActivity
}