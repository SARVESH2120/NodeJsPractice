const fs = require("fs");

const a =100;

setImmediate(()=> console.log("setImmediate"));

Promise.resolve("Promise A").then(console.log);

Promise.resolve("Promise B").then(console.log);

Promise.resolve("Promise C").then(console.log);

fs.readFile("./file.txt", "utf-8", ()=>{
    console.log("File Reading CB");
})

setTimeout(()=> console.log("Timer Expired"), 0);

process.nextTick(()=> console.log("process.nextTick A"));



function printA(){
    console.log("a = ", a);
}


process.nextTick(()=> console.log("process.nextTick B"));

printA();
console.log("Last line of the file");

//100
//Last line of the file
//process.nextTick
//Promise resollve ---- 
//Timer Expired
//setImmediate
//File Reading CB