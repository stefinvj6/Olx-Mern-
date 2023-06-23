const express  = require("express")
const review = require("../Model/ReviewSchema")
const router = express.Router()
const product = require("../Model/ProductSchema")


router.get("/",async(req,res)=>{
    try {
        const getReview = await review.find()
        res.json(getReview)
    } catch (error) {
        res.send(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postReview = new review(req.body) 
        await postReview.save()
        res.json(postReview)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const getReview = await review.findById(req.params.id)
        res.json(getReview)
    } catch (error) {
        res.send(error)
    }
})

router.get("/product/:id",async(req,res)=>{
    try {
        const getCategory = await review.find({ Product: req.params.id }).populate("Product")
        res.json(getCategory);
      } catch (error) {
          res.send(error)
      }
    });

router.get("/user/:id",async(req,res)=>{
    try {
        const getCategory = await review.find({ User: req.params.id }).populate("User")
        res.json(getCategory);
      } catch (error) {
          res.send(error)
      }
    });

router.delete("/:id",async(req,res)=>{
    try {
        const getReview = await review.findByIdAndDelete(req.params.id)
        res.json(getReview)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router