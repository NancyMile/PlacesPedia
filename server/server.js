require('dotenv').config()
const express = require('express')
const { connect } = require('http2')
//require mongoose
const mongoose = require('mongoose')
//require the activities routes
const activitiesRoutes = require('./routes/activities')
//user routes
const userRoutes = require('./routes/user')

//require module express-graphql
//const graphqlHTTP = require('express-graphql')
const { graphqlHTTP } = require('express-graphql');

//create an express app
const app = express()

//set a middleware to handle grapql request
app.use('/graphql',graphqlHTTP({

}));

//middleware
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//handle request routes
app.use('/api/activities',activitiesRoutes)
//user routes
app.use('/api/user',userRoutes)

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/placesPedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


//listen request
app.listen(process.env.PORT,() => {
    console.log('listening port',process.env.PORT)
})