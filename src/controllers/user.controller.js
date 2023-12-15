const asyncHandler = require("../utils/asyncHandle");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = registerUser;
