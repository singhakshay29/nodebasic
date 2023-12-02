//check number even or odd
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];

    req.on("data", (chunk) => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks);
      const value = obj.num1;

      // Write the code here to check if the number is odd or even
      if (typeof value !== "number") {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end('Invalid JSON payload. "num1" must be a number.');
      } else {
        const value = obj.num1;

        if (value % 2 === 0) {
          // If the number is even, return a 200 OK response
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("The number " + value + " is even");
        } else if (value % 2 !== 0) {
          // If the number is odd, return a 404 Not Found response
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("The number " + value + " is odd");
        } else {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end(
            'Invalid JSON payload. Please provide a valid JSON object with a "num1" field.'
          );
        }
      }
    });
  }
});

//Calculating Exponents

const http = require("http");

const server2 = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];

    req.on("data", (chunk) => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks);
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if (!value1 || !value2) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("The operation cannot be performed");
      } else if (value1 <= 0) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("The operation cannot be performed");
      } else {
        const ans = Math.pow(value1, value2);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Result" + ans);
      }
    });
  }
});

module.exports = server2;

module.exports = server;
