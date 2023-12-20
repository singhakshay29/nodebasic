const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} = require("../controllers/user.controller");
const upload = require("../middleware/multer.middleware");
const verifyJwt = require("../middleware/auth.middleware");
const router = express.Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJwt, logoutUser);

router.route("/refreshToken").post(refreshAccessToken);

module.exports = router;
