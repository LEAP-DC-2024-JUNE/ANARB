const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const briefData = fs.readFileSync("./dev-data/brief.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  let path = req.url;
  let method = req.method;

  if (path === "" || path === "/" || path === "/home") {
    res.end("Hello, this is Home Page");
  } else if (path === "/products") {
    res.end("Hello, this is Products Page");
  } else if (path.startsWith("/api/products/") && method === "GET") {
    const paths = pathname.split("/"); // array ruu hiij ugch bn
    const id = parseInt(paths[3]);
    const selectedItem = detailedItems.find((item) => item.id === id);

    if (selectedItem) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(selectedItem));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item is not found" }));
    }
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
