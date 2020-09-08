const express=require('express')
require('./DB/connection.js')
var app=express();


app.get("/list",(req,res)=>{
res.send({
    name: "Priya",
    Message : "Signup"
})
})



app.listen(3000,()=>{
    console.log("The server is up on 3000")
})

//DAY-1 : schema creation, db connection, server setup, /list GET method 
