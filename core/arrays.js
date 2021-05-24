const nos = [1, 2, 3, 4];
 
for (let i = 0; i < nos.length; i++) {
 console.log(nos[i]);
}
// for of
for (let n of nos) {
 console.log(n);
}


// map function
const square = [];
for (let n of nos) {
 square.push(n * n);
}
console.log(nos, square);
// map
const sqr = nos.map(function (val, index, arr) {
 // return the update value
 return val * val;
});
console.log(nos, sqr);
const evenNos = nos.map(function (val) {
 if (val % 2 === 0) {
 return val * val;
 }
});
console.log(evenNos);

//nope filter
const even = nos.filter(function (val, index, arr) {
 console.log(val, index, arr);
 // return a boolean
 return val % 2 === 0;
});
console.log(even);
 
const evenNo = nos.filter((val) => val % 2 === 0).map((v) => v * v);
console.log(evenNo);