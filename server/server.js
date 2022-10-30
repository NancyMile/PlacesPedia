require('dotenv').config()
const express = require('express')
const { connect } = require('http2')
//require mongoose
const mongoose = require('mongoose')
//require cors
const cors = require('cors')
//require the activities routes
const activitiesRoutes = require('./routes/activities')
//user routes
const userRoutes = require('./routes/user')

//require module express-graphql
//const graphqlHTTP = require('express-graphql')
const { graphqlHTTP } = require('express-graphql');
//import schema
 const schema = require('./schema/schema')
const path = require('path')

//create an express app
const app = express()
// cross origin request
app.use(cors());

//set a middleware to handle grapql request
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
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

//deployment to heroku
__dirname=path.resolve();
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"/client/build")));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });

}

// end  deployment to heroku

// Wrap Mongoose around local connection to MongoDB
//mongoose.set('bufferCommands', false);
const uri = process.env.MONGODB_URI || 'mongodb://mongo/'+process.env.MONGODB
mongoose.connect(uri,{ useNewUrlParser: true });

//listen request
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log('listening port',process.env.PORT)
})