const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":{type:String,required:true},
    "dob":String,
    "bg":String,
    "mon":String,
    "add":String,
    "pin":String,
    "dis":String,
    "plac":String,
    "emid":{type:String,required:true},
    "uname":{type:String,required:true},
    "pass":{type:String,required:true},
    "cpass":{type:String,required:true}
})
let usermodel = mongoose.model("user",schema)
module.exports= {usermodel}