const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise B").then(console.log);

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the file");
