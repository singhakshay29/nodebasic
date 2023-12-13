const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const weekdata = [
  {
    id: 1,
    title: "day1",
    name: "monday",
  },
  {
    id: 2,
    title: "day2",
    name: "tuesday",
  },
  {
    id: 3,
    title: "day3",
    name: "wednesday",
  },
  {
    id: 4,
    title: "day4",
    name: "thursday",
  },
  {
    id: 5,
    title: "day5",
    name: "Friday",
  },
  {
    id: 6,
    title: "day6",
    name: "Saturday",
  },
];

app.get("/api/day", (req, res) => {
  res.send(weekdata);
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
