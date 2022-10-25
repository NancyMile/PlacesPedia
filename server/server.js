require('dotenv').config()
const express = require('express')
//create an express app
const app = express()

//middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//handle request routes
app.get('/',(req,res) =>{
    res.json({message:'Welcome to the app'})
})

//listen request
app.listen(process.env.PORT,() => {
    console.log('listening port',process.env.PORT)
})