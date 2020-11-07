require('../src/db/mongoose')
const Tasks = require('../src/models/task')

// Task.findByIdAndUpdate('5fa01ddc527b602a446845ea',{completed:false}).then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id) =>{
    await Tasks.findByIdAndDelete({_id:id})
    const count = await Tasks.countDocuments({ completed:false })
    return count
}

deleteTaskAndCount('5fa24a4cad3ce33f2cc1db66').then((result)=>{
    console.log('Result is :',result)
}).catch((e)=>{
    console.log('Error is:-',e)
})