const express= require('express')
const {
    createActivity,
    getActivities,
    getActivity,
    deleteActivity,
    updateActivity
} =require('../controllers/activityController')
//import the middleware
const requireAuth = require('../middleware/requireAuth')

//create an instance of the router
const router = express.Router()
//fire the middleware funtion before to other to ensure the user is autorized before gettin into any CRUD action
router.use(requireAuth)
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