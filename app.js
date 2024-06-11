const express = require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const {usermodel} = require("./model/user")
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
})

app.post("/add",(req,res)=>
{
    let input = req.body
    console.log(input)
    let user = new usermodel(input)
    console.log(user)
    user.save() 
    res.json({"status":"ADD"})
})
app.listen(8084,()=>{
    console.log("server started")
})