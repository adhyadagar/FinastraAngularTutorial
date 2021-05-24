// all functions are return type functions by default 
// function fun_name 

function test(a,b) {
    console.log("a:", a,"b:", b);

}

test(1,2);
test(1);
test(1,2,3);

function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//function(){} unnamed/expression/anonymous function 

const a = function(){ //assigning a function to a variable 
    console.log("anonymous function");
};
a();

// ES6: arrow functions: (args) => {code block} : => (arrow operator) LAMBDA FUNCTION
const person_1 = {
    name: 'mike',
    age: 12,
    greeting: function(){
        //greeting is a function
        // this refers to the current (person) object
        console.log("hello from",this.name);    }
}

  /*  
// ES6 : arrow functions : (args) => {code block} : => (arrow operator)
//arrow function is used to bind the scope of "this" variable 
//async functions: arrow functions 
const person = {
    name: "mike",
    age: 12,
    greeting: function () {
    // greeting is a function belonging to person object
    // this refers to the current (person) object
    console.log("OUTSIDE",this)
    setTimeout(function () {
        console.log("INSIDE",this)
        console.log("hello from", this.name);
        }, 1000);
    },
};
person.greeting();
person.name = "john";
person.greeting();
*/



const person = {
    name: "mike",
    age: 12,
greetingLexical: function () {
    const self = this; // lexical scoping
    console.log("OUTSIDE", this);
    setTimeout(function () {
    console.log("INSIDE", this); // window
    console.log("hello from", self.name); // person
    }, 1000);
    }
}