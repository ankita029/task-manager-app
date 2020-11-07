const mongoose = require('mongoose')
const validator = require('validator')

const Tasks = mongoose.model('Tasks',{
    description:{
        type: String,
        isDone: Boolean,
        required: true,
        maxlength: 50,
        minlength: 5
    },
    completed:{
        type: Boolean,
        required: true
    }
})

module.exports = Tasks