const http = require("http");
const url = require("url");

let items = [];
let currentId = 1;

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunck) => {
      body += chunck.toString();
    });
    req.on("end", () => resolve(JSON.parse(body)));
    req.on("error", (err) => reject(err));
  });
};

const server = http.createServer(async (request, response) => {
  const reqUrl = url.parse(request.url, true);

  const method = request.method;
  const pathname = reqUrl.pathname;

  if (pathname === "/api/items" && method === "POST") {
    const data = await parseBody(request);
    const newItem = { id: currentId++, ...data };
    items.push(newItem);

    response.writeHead(201, { "Content-type": "application/json" });
    response.end(JSON.stringify(newItem));
  } else if (pathname === "/api/items" && method === "GET") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(items));
    // console.log("GET for all method is called");
  } else if (pathname.startsWith("/api/items/") && method === "GET") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const selectedItem = items.find((item) => item.id === id);

    if (selectedItem) {
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(selectedItem));
    } else {
      response.writeHead(404, { "Content-type": "application/json" });
      response.end(JSON.stringify({ error: "Item is not found" }));
    }
  } else if (pathname.startsWith("/api/items/") && method === "PUT") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      response.writeHead(404, { "Content-type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      const data = await parseBody(request);
      items[index] = { ...items[index], ...data };

      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(items[index]));
    }
  } else if (pathname.startsWith("/api/items/") && method === "DELETE") {
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      response.writeHead(404, { "Content-type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      const deletedItem = items.splice(index, 1)[0];
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(
        JSON.stringify({ message: "Item Deleted", item: deletedItem })
      );
    }
  } else {
    response.writeHead(404, { "Content-type": "application/json" });
    response.end(JSON.stringify({ error: "Item is not found" }));
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Starting listening  to 127.0.0.1 on 3000");
});
