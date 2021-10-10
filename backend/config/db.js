const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    })
    console.log('mongoDB connected')
  } catch (error) {
    console.error("mongodb not connected : ", error)
    process.exit(1)
  }
}


module.exports = connectDB