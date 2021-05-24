console.log("app started");
 
// setTimeout(function_to_be_executed,timeout_duration)
setTimeout(function () {
 // computations
 console.log("some task execution 1");
}, 2000);

setTimeout(function () {
    // computations
    console.log("some task execution 2");
   }, 0);
 
console.log("app finished");
