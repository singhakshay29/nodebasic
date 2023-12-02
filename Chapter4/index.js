const express = require("express");
const fs = require("fs");

const server = express();
const data = JSON.parse(
  fs.readFileSync("/Users/akshay/Documents/nodebasic/data.json", "utf-8")
);
const products = data.products;

//METHODS
//C R U D create,read,update,delete

//READ
server.get("/products", (req, res) => {
  res.json(products);
});
//GET
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((item) => item.id === id);
  res.json(product);
});
//POST
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json(products);
});
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080);
