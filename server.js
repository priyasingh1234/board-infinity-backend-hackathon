const express=require('express')
require('./DB/connection.js')
const {Todo}=require('./Models/todo')
 

var app=express();
app.use(express.json())
                           
app.get("/list",async(req,res)=>{
var data= await Todo.find()  
res.send({data})

})

app.post("/add",async(req,res)=>{
  var content={taskName,taskDescription,creator,duration,createdAt} =req.body
  console.log(content)
  var todo=new Todo(content) 
  await todo.save()
  res.send({todo})
    
})

app.listen(3000,()=>{
    console.log("The server is up on 3000")
})

//DAY-1 : schema creation, db connection, server setup, /list GET method 
