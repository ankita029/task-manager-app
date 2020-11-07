const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/task')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const app = express()

const port = process.env.PORT || 3000
// const router = new express.Router()

// router.get('/test',(req,res)=>{
//     res.send('Testing new route!!')
// })

// app.use(router)
app.use(userRouter)
app.use(taskRouter)
app.use(express.json())

app.listen(port,()=>{
    console.log('Server is up and running !!')
})