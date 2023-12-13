//Server created using express
// const express = require("express");
// const server = express();

// server.listen(8080, () => {
//   console.log("Server Started");
// });

//-----------------------------------------//

const express = require("express");
const server = express();
const data = require("./UserData");

server.get("/", (req, res) => {
  res.json(data);
});
server.listen(8080, () => {
  console.log("Server Started");
});
