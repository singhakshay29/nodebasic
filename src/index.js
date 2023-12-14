const dotenv = require("dotenv").config();
const connectDB = require("./db/connect");
const app = require("./app");

connectDB();
