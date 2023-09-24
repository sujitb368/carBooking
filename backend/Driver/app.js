import express from "express";
const app = express();

import cors from "cors";

import { connectdb } from "./src/config/dbConfig.js";

connectdb();

app.use(express.json());

//server port number
const port = process.env.port || 8081;

app.listen(port, (err, res) => {
  console.log("Server listening at: " + port);
});
