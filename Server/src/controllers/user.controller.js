import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const registerUser = asyncHandler(async (req, res) => {
//   // steps
//   // get user details from frontend
//   // validation  - non empty
//   //  check if user is already exists - username ,email
//   //  check for images check  for avatar
//   // upload them cludinary
//   // create user object - create entry in db
//   // remove password refresh tocken fields from response
//   // chech for user creation
//   // return response

//   // get user details from frontend
//    const { email, username, password } = req.body;
//  console.log("email: ", email,password,username);

//    // validation
//    if (
//      [ email, username, password].some((field) => field?.trim() === "")
//    ) {
//    throw new ApiError(400, "All fields are required");
//    }
//    //  check if user is already exists - username ,email
//    const existedUser = await User.findOne({
//      $or: [{ username }, { email }],
//      });
//    if (existedUser) {
//      throw new ApiError(409, "User  with email or username already exists");
//    }
//    // console.log(req.files);


//   // create user object - create entry in db
//    const user = await User.create({
//      email,
//      password,
//    username
//    });

//    // remove password refresh tocken fields from response
//    const createdUser = await User.findById(user._id).select(
//      "-password -refreshTocken"
//    );
//    // chech for user creation
//  if (!createdUser) {
//      throw new ApiError(500, "Something went wrong while registering the user");
//    }
   // return response
  return res
    .status(201)
    .json(new ApiResponse("201", "User registered successfully"));
});
export {registerUser}
