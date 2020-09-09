const express=require('express')
require('./DB/connection.js')

const listRouter = require('./router/list')
const addRouter = require('./router/add')

var app=express();
app.use(express.json())

app.use("/",listRouter)
app.use("/",addRouter)

let port = process.env.PORT || 3000
app.listen(port,process.env.IP,()=>{
    console.log("The server is up on 3000")
})

//DAY-1 : schema creation, db connection, server setup, /list GET method 
