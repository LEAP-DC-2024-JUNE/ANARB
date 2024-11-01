const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const briefData = fs.readFileSync("./dev-data/brief.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  let path = req.url;

  if (path === "" || path === "/" || path === "/home") {
    res.end("Hello, this is Home Page");
  } else if (path === "/products") {
    res.end("Hello, this is Products Page");
  } else if (path === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000...");
});
