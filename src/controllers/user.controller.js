const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandle");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudnary");
const ApiResponse = require("../utils/apiResponse");

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, fullName, password } = req.body;
  console.log(userName, email, fullName, password);
  if (
    [fullName, email, userName, password].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User is Already Exists");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath;
  let coverImage;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }

  console.log(avatar);
  if (!avatar) {
    throw new ApiError(400, "Avatar file is not Uploded");
  }

  const user = await User.create({
    email,
    password,
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
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
