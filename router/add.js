const express = require('express')

const {Todo}=require('../Models/todo')

const router = express.Router()

router.post("/add",async(req,res)=>{
  try{
    var content={taskName,taskDescription,creator,duration} =req.body
    //console.log(content)
    var todo=new Todo(content) 
    todo.duration = Date.now() + 1000*60*`${content.duration}`
    await todo.save()
    res.send({todo})
  }
  catch(error){
    res.send({error:"Error occured"})
    throw error
  }
      
  })

module.exports = router