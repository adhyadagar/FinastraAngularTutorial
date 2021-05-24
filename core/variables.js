//var var_name = value;
var a = 10;
var b = true;
var c = "test";     
console.log(a);
console.log(b);
console.log(c);
//10 parallel processors are running.
//ES6
// let & constant --> block scope variables 
for (let i = 0; i < 10; i++) {
    //isolated scopes of i 
    //separate memory allocation for each iteration: 10 different mem ref 
    // when console.log(i) is references it'll take the referenced value 
    setTimeout(function(){
        console.log(i); // computation: ref of i 
    }, i* 100);
    
}

//const : read only : only able to detect only change in ref
// string : immutable : data changes a new ref gets created 
const t = "test"; // mem ref = 200
//t = "demo"; // mem ref = 300


// object & arrays : mutable 
const user = {
    // key:value 
    name: "adhya",
    age: 12,
};
//dot notation 
console.log(user.name);
user.name = 'chahat' //ref remains the same 
//bracket notation :dynamic properties 
console.log(user["name"]);

    

