import express from "express";
const app = express();

//import dbconfig from "/src/config/dbConfig.js";
import { connectdb } from "./src/config/dbConfig.js";

//server port number
const port = process.env.port || 8081;

//connect db
connectdb();

app.use(express.json());

app.listen(port, (err, res) => {
  console.log("Server listening at: " + port);
});
