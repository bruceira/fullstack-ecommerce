const connectDB = require("./config/db")
const productModel = require("./model/productModel")
const productData = require("./data/productData")
require("dotenv").config()

connectDB()
const dataImport = async () => {

  try {
    await productModel.deleteMany()
    await productModel.insertMany(productData)

    console.log("data import success")
    process.exit()
  } catch (error) {
    console.error("error not correct", error)
    process.exit(1)
  }
}


dataImport()