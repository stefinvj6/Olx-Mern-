const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
    User:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    wishlist:{
        type:mongoose.Types.ObjectId,
        ref:'product'
    }
},{ strictPopulate: false })

const cart= mongoose.model("cart",cartSchema)
module.exports = cart