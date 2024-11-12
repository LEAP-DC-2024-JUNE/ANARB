const http = require("http");
const url = require("url");
const fs = require("fs");

let briefItems = [];
let detailedItems = [];

let currentId = 1;

const initialize = () => {
  let briefContent = fs.readFileSync("./storage/brief.json", "utf-8");
  briefItems = JSON.parse(briefContent);

  let detailsContent = fs.readFileSync("./storage/data.json", "utf-8");
  detailedItems = JSON.parse(detailsContent);

  let itemWithMaxId = briefItems.reduce((a, b) => (a.id > b.id ? a : b));
  currentId = itemWithMaxId.id + 1;
};

const saveDataToFile = () => {
  fs.writeFile("./storage/data.json", JSON.stringify(detailedItems), () =>
    console.log("Updated detailed information.")
  );
  fs.writeFile("./storage/brief.json", JSON.stringify(briefItems), () =>
    console.log("Updated brief information.")
  );
};

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
  // Set CORS headers
  response.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins for development
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specific HTTP methods
  response.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
  // catching path (url)
  const reqUrl = url.parse(request.url, true);
  const pathname = reqUrl.pathname;

  // catching method
  const method = request.method;

  if (method === "OPTIONS") {
    response.writeHead(200);
    response.end();
    return;
  }

  if (pathname === "/api/products" && method === "POST") {
    // Create
    const data = await parseBody(request); // <==== hereglegchees irsen data

    const detailedItem = {
      id: currentId,
      productName: data.productName,
      from: data.from,
      nutrients: data.nutrients,
      quantity: data.quantity,
      description: data.description,
    }; // <===== Hadgalj bgaa detailed data medeelel
    detailedItems.push(detailedItem);

    const briefItem = {
      id: currentId,
      productName: data.productName,
      price: data.price,
      organic: data.organic,
    };
    briefItems.push(briefItem);

    saveDataToFile();

    currentId++;

    response.writeHead(201, { "Content-Type": "application/text" });
    response.end("Successfully created an item");
  } else if (pathname === "/api/products" && method === "GET") {
    // Read all
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(briefItems));
  } else if (pathname.startsWith("/api/products/") && method === "GET") {
    // GET /api/items/14  ====> ["" "api" "items" "14"] <=== array
    // Read a single item
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
  } else if (pathname.startsWith("/api/products/") && method === "PUT") {
    // Update
    // PUT /api/items/14 header, body
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);

    // Hadgaladsan elementuud dotroos tuhain ugugdsun id-tai medeelliin index-iig ni avch bn
    const index = detailedItems.findIndex((item) => item.id === id);

    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      const data = await parseBody(request);
      // items[index] = { id: detailedItems[index].id, ...data };
      detailedItems[index] = {
        ...detailedItems[index],
        productName: data.productName,
        from: data.from,
        nutrients: data.nutrients,
        quantity: data.quantity,
        description: data.description,
      };
      briefItems[index] = {
        ...briefItems[index],
        productName: data.productName,
        price: data.price,
        organic: data.organic,
      };

      saveDataToFile();

      response.writeHead(200, { "Content-Type": "application/text" });
      response.end("Item is updated");
    }
  } else if (pathname.startsWith("/api/products/") && method === "DELETE") {
    // Delete
    // DELETE /api/items/14
    const paths = pathname.split("/");
    const id = parseInt(paths[3]);
    const index = detailedItems.findIndex((item) => item.id === id);
    // i1, i2, i3, i4... in
    // 0   1   2   3 .... [n - 1]

    if (index === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Item not found" }));
    } else {
      detailedItems.splice(index, 1);
      briefItems.splice(index, 1);

      saveDataToFile();

      response.writeHead(200, { "Content-Type": "application/text" });
      response.end("Item is deleted");
    }
  } else {
    // Page not found
    response.writeHead(404);
    response.end(JSON.stringify({ error: "Item not found" }));
  }
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Initializing the system...");
  initialize();
  console.log("Initialized the system");
  console.log("Started listening to 127.0.0.1 on 3001");
});
