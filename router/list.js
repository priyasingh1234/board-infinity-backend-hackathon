const express=require('express')

const {Todo}=require('../Models/todo')

const router = express.Router()

router.get("/list",async(req,res)=>{
    try{
    var data= await Todo.find()  
    res.send({data})  
    }
    catch(error){
        res.send({error:"Error occured"})
        throw error

    }
  
        
  
})

module.exports = router