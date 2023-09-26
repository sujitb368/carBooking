import mongoose from "mongoose";
import "dotenv/config";
const { dbURL } = process.env;

const connectdb = async () => {

  console.log("dbURL", dbURL)
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to database");
  } catch (error) {
    console.log("error", error);
  }
};

export { connectdb };
