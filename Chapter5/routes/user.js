const express = require("express");
const router = express.Router();
const userController = require("../Controller/user");
const { addUser, updateUser, deleteUser, getAllUser, getSingleUser } =
  userController;

router
  .get("/", getAllUser)
  .get("/:id", getSingleUser)
  .post("/", addUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

exports.router = router;
