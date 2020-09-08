const express = require('express')

const {Todo}=require('../Models/todo')

const router = express.Router()

router.post("/add",async(req,res)=>{
    var content={taskName,taskDescription,creator,duration,createdAt} =req.body
    //console.log(content)
    var todo=new Todo(content) 
    await todo.save()
    res.send({todo})
      
  })

module.exports = router