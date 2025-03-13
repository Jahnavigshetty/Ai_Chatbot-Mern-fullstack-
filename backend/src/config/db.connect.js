import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(`Attempting to connect to MongoDB...`);
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
