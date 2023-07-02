const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        // required:true
    },
    wishlist:{
        type:mongoose.Types.ObjectId,
        ref:'product',
        required:true
    }
},{ strictPopulate: false })

const cart= mongoose.model("cart",cartSchema)
module.exports = cart