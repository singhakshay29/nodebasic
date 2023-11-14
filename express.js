import express from "express";
const server = express();

//Routes and Method

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.write("<h1>Hello guys welcome to the place </h1>");
  res.end();
});
//use Means every HTTP Method (GET,POST,PUT,DELETE);
server.use("/profile", (req, res) => {
  res.statusCode = 200;
  res.end("<h1>About the page</h1>");
});
server.listen(3005, () => {
  console.log("listening the port");
});
