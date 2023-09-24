
import express from "express";
const app = express();

//import cors from "cors";

//import { connectdb } from "./src/config/dbConfig.js";




import mongoose from "mongoose";
//import "dotenv/config";

//const { dbURL } = process.env


const connectdb = () => {
    console.log("DBURL", dbURL)
    //connect database
    mongoose.connect(dbURL);

}


console.log(connectdb());


//middleware
//app.use(cors());
app.use(express.json());





//server port number
const port = process.env.port || 8081;

//routes configuration
//app.use("/api/v1/driver", userRoutes);
// app.use("/api/v1/product", productRoutes);





app.listen(port, (err, res) => {

    // console.log(connectdb())

    console.log("Server listening at: " + port);
});
