const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api", userRouter);

module.exports = app;
