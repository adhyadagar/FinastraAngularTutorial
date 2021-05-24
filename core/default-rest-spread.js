// default arguments
function sum(a, b = 0) {
    console.log(a, b);
   }
   sum(1, 2);
   sum(4);
    
   // rest args : ... (spread operator)
   function sumOfNos(a, b, c, ...d) {
    console.log(a, b, c, d);
   }
    
   sumOfNos(2, 3, 4);
   sumOfNos(2, 3, 4, 5, 6);
   sumOfNos(2, 3, 4, 5, 6, 7, 8, 9, 9);


   // ... : spread operator : immutability
const product = { id: 100, name: "test", price: 12999 };
const cart = [
 // product, // same ref
 { ...product }, // new ref
];
//console.log(product);
//console.log(cart);
//cart[0].qty = 3;
//console.log(cart);
//console.log(product);

console.log(JSON.stringify(product));
console.log(JSON.stringify(cart));
cart[0].qty = 3;
console.log(cart);
console.log(product);

// string/template literals : '', "", ``
const name = "mike";
const age = 12;
// let message = "Hello from " + name + ", I'm " + age + "yrs old.\n";
// message += "Good morning";
let message = `Hello from ${name}, I'm ${age}yrs old.
Good morning`;
console.log(message);