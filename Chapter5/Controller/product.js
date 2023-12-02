const fs = require("fs");
const data = JSON.parse(
  fs.readFileSync("/Users/akshay/Documents/nodebasic/data.json", "utf-8")
);
const products = data.products;

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};

exports.getAllProduct = (req, res) => {
  res.json(products);
};
exports.getSingleProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((item) => item.id === id);
  res.json(product);
};
exports.addProduct = (req, res) => {
  console.log(req);
  products.push(req.body);
  res.status(201).json(req.body);
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json(products);
};
