const { json } = require("express");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandle");
const { fields } = require("../middleware/multer.middleware");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudnary");
const ApiResponse = require("../utils/apiResponse");

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, fullName, password } = req.body;
  console.log(userName, email, fullName, password);
  // if (!username || !email || !password) {
  //   res.status(400);
  //   throw new Error("All fields are mandetory");
  // }
  if (
    [fullName, email, userName, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All field are required");
  }
  const existedUser = User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User is Already Exists");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avtar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avtar file is required");
  }
  const user = await User.create({
    email,
    password,
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || " ",
    userName: userName.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError("500", "Internal Server Error");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Succesfully"));
});

module.exports = registerUser;
