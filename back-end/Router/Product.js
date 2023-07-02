const express = require("express");
const router = express.Router();
const product = require("../Model/ProductSchema");
const authorizeUser = require("../middlewares/AuthMiddleware")

// get product
router.get("/",async(req,res)=>{
    try {
        const getProduct = await product.find().populate({ path: "user", select: "-password" })
        res.json(getProduct)
    } catch (error) {
        res.send(error)
    }
})

// get product by category name
router.get("/:categories",async(req,res)=>{
    try {
        const getProduct = await product.find({categories:req.params.categories})
        res.json(getProduct)
    } catch (error) {
        res.send(error)
    }
})

// get product by id
router.get("/product/:id",async(req,res)=>{
    try {
        const product1 = await product.findById(req.params.id).populate({ path: "user", select: "-password" })
        res.json(product1)
    } catch (error) {
        res.send(error)
    }
})

// get product by users
router.get("/user/:userId",async(req,res)=>{
  try {
    const userProduct = await product.find({ user: req.params.userId }).populate("user")
    res.status(200).json(userProduct)
  } catch (error) {
    res.status(500).send(error)
  }
})

// post produuct
router.post("/", authorizeUser, async (req, res) => {
    try {
      const postProduct = new product({user:req.user._id,...req.body});
      const savedProduct = await postProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

  // edit product
  router.put("/:id", authorizeUser, async (req, res) => {
    try {
      const productId = req.params.id;
      const userId = req.user._id;
      const updatedProduct = await product.findByIdAndUpdate({ _id: productId, user: userId },req.body,{ new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.json({ message: "Product found.",updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


  // delete product
  router.delete("/:id", authorizeUser, async (req, res) => {
    try {
      const productId = req.params.id;
      const userId = req.user._id;
      const deletedProduct = await product.findByIdAndDelete({_id: productId,user: userId,});
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router