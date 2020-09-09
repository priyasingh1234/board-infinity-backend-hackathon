const mongoose=require("mongoose")
const todoSchema =new mongoose.Schema({
// - task name
// - task description
// - creator
// - duration
// - createdAt
taskName:{
    type:String,
    required:true
},
taskDescription :{
    type:String,
    required:true
},
creator:{
    type:String,
    required:true
},
duration: {
    type: Date
},
createdAt :{
    type: Date,               
    default: Date.now
}

})
todoSchema.index({"duration":1},{expireAfterSeconds:0})

const Todo=mongoose.model('Todo',todoSchema)         //Todo db k anaam 1st time yhah declare krte h? --okk

module.exports = {
    Todo          //but why { } //haan
}