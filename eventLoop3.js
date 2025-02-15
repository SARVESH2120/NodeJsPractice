const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("Timer expired"), 0);


Promise.resolve("Promise B").then(console.log);

fs.readFile("./file.txt", "utf-8", ()=>{
    setTimeout(() => console.log("2nd Timer"));

    process.nextTick(()=> console.log("2nd nexTick"));

    setImmediate(()=> console.log("2nd Immediate"));

    console.log("File Reading CB");
})

process.nextTick(()=> console.log("nextTick"));

console.log("Last line of the file")

//Last line of the file
//nextTick -------
// Timer expired
// setImmediate 
// File Reading CB
// 2nd nexTick
// 2nd Immediate
// 2nd Timer
