import mongoose from "mongoose";
import "dotenv/config";

const { DB_URL } = process.env;

const connectdb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("error", error);
  }
};

export { connectdb };
