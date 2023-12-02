const express = require("express");
const fs = require("fs");

const server = express();
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

//MiddleWare

//METHODS
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});
server.get("/product/:id", (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/", (req, res) => {
  //res.status(200).send(<h1>Hello</h1>);
  res.json(data);
  // res.sendFile("/Users/akshay/Documents/nodebasic/Chapter3/index.html");
  console.log("server start");
});

server.listen(8080);
