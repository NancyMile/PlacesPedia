const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
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


module.exports = mongoose.model('User',userSchema)