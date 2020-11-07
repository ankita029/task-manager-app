const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        lowercase:true,
        trim:true,
        
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid !')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength: 6,

        validate(value){
            if(value.includes('password')){
                throw new Error('Password must not include "password"')
            }
        }
    },
    age:{
        type: Number,
        default: 0,

        validate(value){
            if(value<0){
                throw new Error('Age must be positive')
            }
        }
    }
})


module.exports = User