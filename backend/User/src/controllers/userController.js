//import userModel
import { UserModel, userValidationSchema } from "../models/userModel.js"; // Adjust the path accordingly
import Joi from "joi";
import {
  hashPassword,
  removePassword,
  comparePassword,
} from "../helper/userHelper.js";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

//user sign-up/create controller
const signupController = async (req, res) => {
  try {
    // Validate user data using Joi schema
    const { error, value } = userValidationSchema.validate(req.body);

    console.log(value);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { first_name, last_name, email, password, phone } = value;
    //validation
    //if any of this are not provided, then return with status code 400
    if (!first_name || !last_name || !email || !password || !phone) {
      return res.status(400).send({
        message: "All fields are required",
        success: false,
      });
    }
    //find user by email to check if user already exists
    const isUserExist = await UserModel.findOne({ email });

    //if user exist already then return with status code 400
    if (isUserExist) {
      return res.status(400).send({
        message: "User allready exists",
        success: false,
      });
    }
    const hashedPassword = await hashPassword(password);
    //user details
    const user = new UserModel({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone,
    });
    //save user to database
    await user.save();
    //user details object without password filed
    const userDetails = await removePassword(user);
    return res.status(201).send({
      success: true,
      message: "User successfully created",
      user: userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong unable to create user",
      error,
      success: false,
    });
  }
};

//user login controller
const loginController = async (req, res) => {
  try {
    //user login credentials
    const { email, password } = req.body;
    //validate email and password
    if (!email || !password) {
      return res.status(400).send({
        message: "please enter your email and password",
        success: false,
      });
    }

    //find user by email
    const user = await UserModel.findOne({ email });

    //check if user provided password is correct or not
    const checkPassword = await comparePassword(password, user.password);

    console.log("login-user email, password ", email, password, checkPassword);
    //if user provided password is correct
    if (checkPassword) {
      //user details object without password field
      const userDetails = await removePassword(user);
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      console.log("token: " + token);
      return res.status(200).send({
        success: true,
        message: "login successful",
        token,
        user: userDetails,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "something went wrong", error, success: false });
  }
};

export { signupController, loginController };
