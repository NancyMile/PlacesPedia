require('dotenv').config()
const express = require('express')
//require the activities routes
const activitiesRoutes = require('./routes/activities')

//create an express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//handle request routes
app.use('/api/activities',activitiesRoutes)

//listen request
app.listen(process.env.PORT,() => {
    console.log('listening port',process.env.PORT)
})