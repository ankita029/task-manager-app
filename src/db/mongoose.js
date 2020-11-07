const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',
{useNewUrlParser:true,
 useCreateIndex:true,
 useFindAndModify:false
})



// const me = new User({
//     name: '     Rohan',
//     email: 'rohan@pic.COM',
//     password: 'abc123   '
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })



// const task = new Tasks({
//     'description': 'Make lunch',
//     'completed': false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error',error)
// })

