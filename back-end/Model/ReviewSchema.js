const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    User:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
    },
    Product:{
        type:mongoose.Types.ObjectId,
        ref:'product'
    },
    feedback:{
        type:String,
        required:true
    }
},{ strictPopulate: false })

const review= mongoose.model("review",reviewSchema)
module.exports = review