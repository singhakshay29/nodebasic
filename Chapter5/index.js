const express = require("express");
const server = express();
const productRouter = require("./routes/products.js");
const userRouter = require("./routes/user.js");

server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(8080);
