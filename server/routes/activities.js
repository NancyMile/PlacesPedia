const express= require('express')
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
 router.post('/',(req,res) => {
     res.json({message: 'Post Place'})
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