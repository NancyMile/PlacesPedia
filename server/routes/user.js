const express = require('express')
//import user controller
 const { loginUser, signupUser } = require ('../controllers/userController')
// instance of the express router
const router = express.Router()
//login
router.post('/login', loginUser)

//sign up
router.post('/signup', signupUser)

module. exports = router