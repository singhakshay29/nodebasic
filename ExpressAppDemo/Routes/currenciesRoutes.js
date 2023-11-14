const express = require("express");
const router = express.Router();

router.get("/allcurrencies", (req, res) => {
  console.log("Hello Get allcurrencies");
});

module.exports = router;
