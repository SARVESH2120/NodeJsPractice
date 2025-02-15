const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//No call backs because it is sync it blocks the I/O
crypto.pbkdf2Sync("password", "salt", 5000, 50, "sha512");
console.log("First key is genarated");

setTimeout(() => {
  console.log("call me ASAP");
}, 0); //it will only be called once call stack main thread is empty

//It is async
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("second Key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplcation result is : ", c);
