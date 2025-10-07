const mongoose = require("mongoose");



const MONGO_URI="mongodb+srv://abhay_db_user:abhay123@cluster0.fnwz0x0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
