const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        // required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
})

const product = mongoose.model("product",productSchema)
module.exports=product