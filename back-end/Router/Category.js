const express = require('express')
const router = express.Router()
const category = require('../Model/CategorySchema')

router.get("/",async(req,res)=>{
    try {
        const getCategory = await category.find()
        res.json(getCategory)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const category1=await category.findById(req.params.id)
        res.json(category1)
    } catch (error) {
        res.send(error)
    }
})

router.post('/',async(req,res)=>{
    try {
        const postCategory = new category(req.body)
        await postCategory.save()
        res.json(postCategory)
    } catch (error) {
        res.send(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const editCategory = await category.findByIdAndUpdate(req.params.id,req.body)
        res.json(editCategory)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteCategory=await category.findByIdAndDelete(req.params.id)
        res.json(deleteCategory)
    } catch (error) {
        res.send(error)
    }
})
module.exports = router