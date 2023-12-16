const express = require("express");
const registerUser = require("../controllers/user.controller");
const upload = require("../middleware/multer.middleware");

const router = express.Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avtar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login");

module.exports = router;
