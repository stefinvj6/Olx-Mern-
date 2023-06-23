const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
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
    }
    // categories:{
    //     type:mongoose.Types.ObjectId,
    //     ref:"category"
    // }
})

const product = mongoose.model("product",productSchema)
module.exports=product