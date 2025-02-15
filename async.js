const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//Synchronous
fs.readFileSync("./file.txt", "utf-8"); //10ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 second");
}, 5000);

//async
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
