require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")

connectDB()

const app = express()

app.use(express.json())

app.use("/api/product", productRoutes)

const PORT = process.env.PORT || 5050

app.listen(PORT, () => console.log(`server running on port ${PORT}`))