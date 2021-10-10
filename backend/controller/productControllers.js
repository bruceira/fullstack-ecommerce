const productModel = require("../model/productModel")


const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({})
    res.json(products)
  } catch (error) {
    console.error("error:", error)
    res.status(500).json({ message: "fail" })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id)
    res.json(product)
  } catch (error) {
    console.error("error:", error)
    res.status(500).json({ message: "fail" })
  }
}

module.exports = { getAllProducts, getProductById }