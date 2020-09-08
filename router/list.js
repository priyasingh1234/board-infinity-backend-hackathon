const express=require('express')

const {Todo}=require('../Models/todo')

const router = express.Router()

router.get("/list",async(req,res)=>{
    var data= await Todo.find()  
    res.send({data})    
})

module.exports = router