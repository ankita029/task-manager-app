require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fa01c6e93d27106c0955c01', {age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,Age) =>{
    const user = await User.findByIdAndUpdate({_id:id}, {Age})
    const count = await User.countDocuments({age:Age})
    return count
}

updateAgeAndCount('5fa01c6e93d27106c0955c01',1).then((count)=>{
    console.log('Count is:-',count)
}).catch((e)=>{
    console.log('Error is:-',e)
})