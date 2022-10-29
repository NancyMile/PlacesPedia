const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema
//user schema
const userSchema  = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// static sign up
userSchema.statics.signup = async function (email, password) {
    //check that email and pass has values
    if(!email || !password){
        throw Error('Please fill all the fields')
    }
    //check if is a valid email
    if(!validator.isEmail(email)){
        throw Error ("Email is not valid")
    }
    //check if the pass is strong
    if(!validator.isStrongPassword(password)){
        throw Error("Please use a strong password")
    }
    //check if the email exist
    const exists = await this.findOne({ email })
        if(exists){
            throw Error('Email already exist')
        }
        //generate salt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    // so bycript  will has the pass and now save it on db
    const user = await this.create({ email, password: hash })
    return user
}

//static login
userSchema.statics.login = async function(email, password){
    //check that email and pass has values
    if(!email || !password){
        throw Error('Please fill all the fields')
    }
     //check if the email exist
     const user = await this.findOne({ email })
     if(!user){
         throw Error('Incorrect email try again')
     }
     // compare the passwords
     const match = await bcrypt.compare(password, user.password)
     if(!match){
        throw Error("Icorrect password try again")
     }
     return user
}

module.exports = mongoose.model('User',userSchema)