const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    let response = null;
    if (localFilePath) {
      response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      console.log("file uploaded on Cloudinary", response.url);
    }
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

module.exports = uploadOnCloudinary;
