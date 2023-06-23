const express =require("express")
const router = express.Router()
const cart = require("../Model/CartSchema")

router.get("/",async(req,res)=>{
    try {
        const getCart = await cart.find().populate("wishlist")
        res.json(getCart)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const getCartId=await cart.findById(req.params.id).populate("wishlist")
        res.json(getCartId)
    } catch (error) {
        res.send(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postCart = new cart(req.body)
        await postCart.save()
        res.json(postCart)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteCart = await cart.findByIdAndDelete(req.params.id)
        res.json(deleteCart)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router
