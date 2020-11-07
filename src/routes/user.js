const express = require('express')
const router = new express.Router()
const User = require('../models/user')

//testing
router.get('/test',(req,res)=>{
    res.send('From a new file!!')
})

//create Users
router.post('/users', async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }

    // user.save().then(()=>{
    //     res.send(user)
    // }).catch((e)=>{
        
    //     res.status(400).send(e)
    // })
})

//fetch users
router.get('/users',async(req,res)=>{

    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }

    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
})

//fetch user by id
router.get('/users/:id',async (req,res)=>{
    const _id = req.params.id;

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(400)
    //     }
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

//update a required field in user
router.patch('/users/:id',async(req,res)=>{

    const updates = Object.keys(req.body)
    const updatesAllowed = ["name","age","email","password"]
    const isValidationOperation = updates.every((update)=> updatesAllowed.includes(update))

    if(!isValidationOperation){
        return res.status(400).send({error:'Invalid Update!'})
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})

        if(!user){
            return res.send(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})
//delete a user
router.delete('/users/:id',async(req,res)=>{
    try{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).send({error:'No user found!'})
    }
    res.send(user)
}catch(e){
    res.status(500).send()
}
})

module.exports = router