//Create Server in Node;

const http = require("http");
const data = require("./UserData");

// const server = http.createServer((req, res) => {
//   res.end(JSON.stringify(data));
// });

const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end("Welcome to Home Page");
      break;
    case "/data":
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify(data));
      break;
    default:
      res.writeHead(404, "Page Not Found");
      res.end();
  }
});

server.listen(8080);
