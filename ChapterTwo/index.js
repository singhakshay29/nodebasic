const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const server = http.createServer((req, res) => {
  console.log("server Started");
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("titleHere", product.title)
      .replace("priceHere", product.price)
      .replace("**rating**", product.rating)
      .replace("srcHere", product.thumbnail);
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/data":
      res.setHeader("Content-Type", "application/js");
      res.end(data);
      break;
    // case "/product":
    //   res.setHeader("Content-Type", "text/html");
    //   let modifiedIndex = index
    //     .replace("titleHere", product.title)
    //     .replace("priceHere", product.price)
    //     .replace("**rating**", product.rating)
    //     .replace("srcHere", product.thumbnail);
    //   res.end(modifiedIndex);
    //   break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
});

server.listen(8080);
