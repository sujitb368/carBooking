
import mongoose from "mongoose";
import "dotenv/config";

const { dbURL } = process.env


const connectdb = () => {
    console.log("DBURL", dbURL)
    //connect database
    mongoose.connect(dbURL);
}


export { connectdb } 