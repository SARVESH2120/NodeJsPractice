console.log("Hello World");


var a = 1078698;
var b = 20986;

//This callback will only be pushed to callstack in v8 once the call stack is empty..
setTimeout(()=>{
    console.log("call me ASAP");
},0);


setTimeout(()=>{
    console.log("call me after 3 second");
},3000);




function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is :  ", c);