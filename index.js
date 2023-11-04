//import { appendFile, readFile, unlink } from "fs";
import { createServer } from "http";
import { cpus, userInfo } from "os";

//
const user = userInfo();
//console.log(user);

//
const number = cpus();
//console.log(number);

//

//how to create File

// appendFile("file.txt", "Hello World!! I am Learning Node js", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Successfully Created");
//   }
// });

//how to read file

// readFile("file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

//how to delete the file

// unlink("file.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Successfully Deleted");
//   }
// });

const server = createServer((req, res) => {
  console.log("Server is up");
  console.log(req.url);
  res.writeHead(201, { "Content-Type": "text/html" });
  res.end("hello");
});

server.listen(8080, () => {
  console.log("listing on Port");
});
