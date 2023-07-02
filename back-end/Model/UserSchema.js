const mongoose =require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        unique:true,
    },
    email: { 
        type: String, 
        required: true,
        unique:true,
    },
    password: { 
        type: String, 
        required: true 
    },
    number: {
        type: Number, 
        required: true ,
        unique:true,
    }
})

const user = mongoose.model("user",userSchema)
module.exports = user