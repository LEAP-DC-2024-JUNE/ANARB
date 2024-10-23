const fs = require(`node:fs`);
let text = fs.readFileSync("./texts/input.txt", "utf-8");

function reverse(string) {
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed = stringReversed + string[i];
  }
  console.log(stringReversed);
  fs.writeFileSync(
    `./texts/output-result.txt`,
    stringReversed + "\nCreated a file successfully!"
  );
}
reverse(text);

function max(value1, value2) {
  if (value1 > value2) {
    return value1;
  } else return value2;
}
console.log(max(10, 12));
