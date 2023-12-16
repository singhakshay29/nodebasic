const dotenv = require("dotenv").config();
const connectDB = require("./db/connect");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server Started");
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
  });
