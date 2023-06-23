const express = require("express")
const router = express.Router()
const products = require('../Model/ProductSchema')

router.get('/:id', async (req, res) => {
    try {
      const getCategory = await products.find({ categories: req.params.id }).populate("categories")
      res.json(getCategory);
    } catch (error) {
        res.send(error)
    }
  });

module.exports = router