const mongoose = require('mongoose')
// create schema
const Schema = mongoose.Schema
const activitySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
},{timestamps:true})
 //creates activities on database 
module.exports = mongoose.model('Activity', activitySchema)