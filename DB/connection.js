const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://DB_BoardInfinity:priya12345@cluster0.2i6jh.mongodb.net/DB_BoardInfinity",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})

var con = mongoose.connection
con.on("open",()=>{
    console.log("DB connected")
})


module.exports = {
    mongoose
}

