// //import { appendFile, readFile, unlink } from "fs";
// import { createServer } from "http";
// import { cpus, userInfo } from "os";

// //
// const user = userInfo();
// //console.log(user);

// //
// const number = cpus();
// //console.log(number);

// //

// //how to create File

// // appendFile("file.txt", "Hello World!! I am Learning Node js", (error) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Successfully Created");
// //   }
// // });

// //how to read file

// // readFile("file.txt", "utf-8", (error, data) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log(data);
// //   }
// // });

// //how to delete the file

// // unlink("file.txt", (error) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Successfully Deleted");
// //   }
// // });

// //how to create Server
// const server = createServer((req, res) => {
//   console.log("Server is up");
//   console.log(req.url);
//   res.setHeader(201, { "Content-Type": "text/html" });

//   //Routes
//   //we have to take care of Methods

//   if (url === "/") {
//     if (method === "GET") {
//       res.statusCode = 200;
//       res.write("<h1>Its Me Akshay</h1>");
//       res.end("hello");
//     }
//   } else if (url === "/about") {
//     res.statusCode = 200;
//     res.write("<h1>Phone number 7607607977");
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.write("<h1>Not Found</h1>");
//   }
// });

// server.listen(8080, () => {
//   console.log("listing on Port");
// });
