import express from "express";
const app = express();

import cors from "cors";

import mongoose from "mongoose";

// Import config file
import { dbURL } from "./src/config/config.js";

// Import routes
// Import user routes
import userRoutes from "./src/routes/userRoutes.js";
// Import product routes
// import productRoutes from "./routes/productRoutes.js";

//connect database
mongoose.connect(dbURL);

//middleware
app.use(cors());
app.use(express.json());

//server port number
const port = process.env.port || 8080;

//routes configuration
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/product", productRoutes);

app.listen(port, (err, res) => {
  console.log("Server listening at: " + port);
});
