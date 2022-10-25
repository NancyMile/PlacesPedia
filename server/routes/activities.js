const express= require('express')
const Activity = require('../models/activityModel')


//create an instance of the router
const router = express.Router()

//list all places
 router.get('/', (req,res) => {
     res.json({message:'Get list of places'})
 })

 //get a single place
 router.get('/:id',(req,res) => {
     res.json({message:'Single Place'})
 })

 //post a new place
 router.post('/', async (req,res) => {
     const {title,comment} = req.body
     try{
         const activity = await Activity.create({title,comment})
         res.status(200).json(activity)
     }catch(error){
        res.status(400).json({error: error.message})
     }
 })

 //delete a place
 router.delete('/:id',(req,res) => {
    res.json({message: 'Delete a Place'})
})

//update a place
router.patch('/:id',(req,res) => {
    res.json({message: 'update Place'})
})

module.exports = router