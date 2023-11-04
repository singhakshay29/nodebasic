//For type 1,2 exports

// const service = require("./service");
// console.log(service);
// const valSum = service.sum(10, 122);
// console.log(valSum);
// console.log("hello");

//for type 3 export

//import { sum, diff } from "./service.js";

// const valSum = sum(10, 122);
// console.log(valSum);

// const valDiff = diff(559240, 22033);
// console.log(valDiff);

//Using Node ------->File system<--------------

//------------------readFileSync---------------

import { sum, diff } from "./service.js";
import * as fs from "fs";

//const txt = fs.readFileSync("./DWSample1-TXT.txt");
//it reads file in bytes for that u have to tell in which formate u want to read

// const txt = fs.readFileSync("./DWSample1-TXT.txt", "utf-8");
// console.log(txt);

//but we don't do like this because we don't do anything which takes time, we don't want to block server

//------------------readFile---------------

//so we use Async which ,it run as a asyncronusly it give response in callback

// const txt = fs.readFile("./DWSample1-TXT.txt", "utf-8", (text) => {
//   console.log(text);
// });
//currently it is giving as null
//readFile take two parameter first one is for error so we have to use two parameter

const t1 = performance.now();
const txt = fs.readFile("./DWSample1-TXT.txt", "utf-8", (error, text) => {
  console.log(text);
});
//this method is always used

const valSum = sum(10, 122);
console.log(valSum);

const valDiff = diff(559240, 22033);
console.log(valDiff);
const t2 = performance.now();
console.log(t1);
console.log(t2);
