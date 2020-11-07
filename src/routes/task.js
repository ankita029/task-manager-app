const express = require('express')
const router = new express.Router()
const Tasks = require('../models/task')

//create tasks
router.post('/tasks',async(req,res)=>{
    const task = new Tasks(req.body)

    try{
        await task.save()
        res.status(200).send(task)
        //console.log(task)
    }catch(e){
        res.status(400).send(e)
    }

    // task.save().then(()=>{
    //     res.send(task)
    // }).catch((e)=>{
    //     //console.log(e)
    //     res.status(400).send(e)
    // })
})


//fetch tasks
router.get('/tasks',async(req,res)=>{

    try{
        const tasks = await Tasks.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
    // Tasks.find({}).then((tasks)=>{
    //     res.send(tasks)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

//fetch task using id
router.get('/tasks/:id',async(req,res)=>{
    const _id = req.params.id

    try{
        const task = await Tasks.findById(_id)
        if(!task){
            return res.status(400).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
    // Tasks.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(400).send()
    //     }
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})


//update a task using id 
router.patch('/tasks/:id',async(req,res)=>{

    const updates = Object.keys(req.body)
    
    try{
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})

        if(!task){
            return res.status(404).send({error: 'No user found'})
        }
        res.send(task)
    }catch(e){
        res.status(500).send({error:'Internal issue!'})
    }
})

//delete a task
router.delete('/tasks/:id',async(req,res)=>{
    try{
        const task = await Tasks.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send({error:'No task found'})
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router