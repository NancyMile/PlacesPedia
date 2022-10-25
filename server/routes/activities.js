const express= require('express')
const {
    createActivity,
    getActivities,
    getActivity,
    deleteActivity,
    updateActivity
} =require('../controllers/activityController')

//create an instance of the router
const router = express.Router()

//list all places
 router.get('/', getActivities)

 //get a single place
 router.get('/:id',getActivity)

 //post a new place
 router.post('/', createActivity)

 //delete a place
 router.delete('/:id', deleteActivity)

//update a place
router.patch('/:id', updateActivity)

module.exports = router