const Activity = require('../models/activityModel')
const mongoose  = require('mongoose')

//get all activities
const getActivities = async (req,res) => {
    const activities = await Activity.find({}).sort({createdAt: -1})
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
    //add doc to database
    try{
        const activity = await Activity.create({title,comment})
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