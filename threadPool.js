const fs = require("fs");

const crypto = require("crypto");

// process.env.UV_THREADPOOL_SIZE = 2  //{MAKE A 2 THREAD AND 2 THREAD GIVES OUTPUT SIMULTANEOUSLY}

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2 done");
});

//Order of execution is not same then can execute in any order
//4 1 3 2 or 1 2 3 4 or 2 3 1 4
