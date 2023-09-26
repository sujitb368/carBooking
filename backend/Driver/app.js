import express from "express";
const app = express();

import cors from "cors";

import { connectdb } from "./src/config/dbConfig.js";

import validateFields from "./src/middleware/joi.middleware.js";

// all routes
import driverRoutes from "./src/routes/driverRoutes.js";


connectdb();

app.use(express.json());




// api callings
app.use('/api/v1/driver', driverRoutes);





//server port number
const port = process.env.port || 8081;

app.listen(port, (err, res) => {
  console.log("Server listening at: " + port);
});
