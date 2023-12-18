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

const loginUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email) {
    throw new ApiError(400, "username or email is required");
  }
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (!existedUser) {
    throw new ApiError(404, "user does not exist");
  }
  const isPasswordCorrect = await existedUser.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid user credentials");
  }
  const { accesToken, refershToken } = await generateAccessandRefreshToken(
    existedUser._id
  );

  const loggedUser = await User.findById(existedUser._id).select(
    "-password -refershToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accesToken, options)
    .cookie("refershToken".refershToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedUser, accesToken, refershToken },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refershToken: undefined,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiError(200, {}, "User logged Out"));
});

const generateAccessandRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accesToken = user.generateAccessToken();
    const refershToken = user.generateRefreshToken();
    user.refershToken = refershToken;
    await user.save({ validateBeforeSave: false });
    return { accesToken, refershToken };
  } catch (error) {
    throw new ApiError(500, "Internal Server Error");
  }
};

module.exports = { registerUser, loginUser, logoutUser };
