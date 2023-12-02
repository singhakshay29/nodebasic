const express = require("express");
const router = express.Router();
const productController = require("../Controller/product");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
} = productController;

router
  .get("/", getAllProduct)
  .get("/:id", getSingleProduct)
  .post("/", addProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

exports.router = router;
