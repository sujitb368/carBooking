import mongoose from "mongoose";

import Joi from "joi";

const { ObjectId } = mongoose.Schema.Types;

//define the user schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    // role: {
    //   type: String,
    //   default: "user",
    //     required: true,
    // },

    profilePic: {
      type: String,
      default:
        "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
    },
  },
  { timestamps: true }
);

// Define Joi validation schema
const userValidationSchema = Joi.object({
  first_name: Joi.string().required().trim(),
  last_name: Joi.string().required().trim(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in", "org"] },
    })
    .required()
    .trim(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .trim(),
  phone: Joi.string().required().trim(),
  // role: Joi.number().optional(),
  profilePic: Joi.string(),
});

// Create the user model from the schema
const UserModel = mongoose.model("UserModel", userSchema);

export { UserModel, userValidationSchema };
