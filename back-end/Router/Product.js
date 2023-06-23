const express = require("express");
const router = express.Router();
const product = require("../Model/ProductSchema");
const Category = require("../Model/CategorySchema")

    router.get("/",async(req,res)=>{
        try {
            const getProduct = await product.find()
            res.json(getProduct)
        } catch (error) {
            res.send(error)
        }
    })

router.get("/product/:id",async(req,res)=>{
    try {
        const product1 = await product.findById(req.params.id)
        res.json(product1)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:categories",async(req,res)=>{
    try {
        const getProduct = await product.find({categories:req.params.categories})
        res.json(getProduct)
    } catch (error) {
        res.send(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postProduct = new product(req.body)
        await postProduct.save()
        res.json(postProduct)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const editProduct = await product.findByIdAndUpdate(req.params.id,req.body)
        res.json(editProduct)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteProduct = await product.findByIdAndDelete(req.params.id)
        res.json(deleteProduct)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router