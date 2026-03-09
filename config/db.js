import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("MongoDB connection error:", err.message);
  }
};
export default dbConnect;