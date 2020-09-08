const express=require('express')
require('./DB/connection.js')

const listRouter = require('./router/list')
const addRouter = require('./router/add')

var app=express();
app.use(express.json())

app.use("/",listRouter)
app.use("/",addRouter)
                           
app.listen(3000,()=>{
    console.log("The server is up on 3000")
})

//DAY-1 : schema creation, db connection, server setup, /list GET method 
