import express from "express";

import {
  signupController,
  loginController,
} from "../controllers/userController.js";

// import { isLogin } from "../middlewares/userMiddleware.js";

//router object
const router = express.Router();

//user creation routes | signup
router.post("/signup", signupController);

//login user routes
router.post("/login", loginController);

export default router;
