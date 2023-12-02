const fs = require("fs");
const data = JSON.parse(
  fs.readFileSync("/Users/akshay/Documents/nodebasic/data.json", "utf-8")
);
const { users } = data;

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((item) => item.id === id);
  const user = users[productIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};

exports.getAllUser = (req, res) => {
  res.json(users);
};
exports.getSingleUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((item) => item.id === id);
  res.json(user);
};
exports.addUser = (req, res) => {
  console.log(req);
  users.push(req.body);
  res.status(201).json(req.body);
};
exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((item) => item.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.json(users);
};
