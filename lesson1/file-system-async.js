const fs = require(`node:fs`);

fs.readFile("./texts/read-this.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(`Error occured while reading the file..`, err);
  } else console.log(data);
  fs.writeFile("./texts/message.txt", data, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

console.log("Started reading...");
