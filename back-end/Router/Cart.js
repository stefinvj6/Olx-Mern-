const express =require("express")
const router = express.Router()
const cart = require("../Model/CartSchema")
const authorizeUser = require("../middlewares/AuthMiddleware")

router.get("/", authorizeUser, async (req, res) => {
    try {
      const userId = req.user._id;
      const getCart = await cart.find({ user: userId }).populate("wishlist");
      res.json(getCart);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

router.post("/", authorizeUser, async (req, res) => {
    try {
      const postcart = new cart({user:req.user._id,user:req.body.user,wishlist:req.body.wishlist});
      const savedcart = await postcart.save();
      res.status(201).json(savedcart);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

  router.delete("/:id", authorizeUser, async (req, res) => {
    try {
      const cartId = req.params.id;
      const userId = req.user._id;
      const deletedCart = await cart.findOneAndDelete({
        _id: cartId,
        user: userId,
      });
  
      if (!deletedCart) {
        return res.status(404).json({ message: "Cart not found." });
      }
  
      res.status(200).json({ message: "Cart deleted successfully." });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  


module.exports = router
