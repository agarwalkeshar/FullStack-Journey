console.log("Today is the 2nd lec of JS");

var a = 5;
var b = 6;
var c = "Keshar"

// var c is string. String is a collection of characters
// variable name should start with a ($, _ or a letter). It should not start with a number.
// var in JS is globally scoped while let and const are block scoped.
// let is limited to a block while var is applicable to the entire code.

// const is used to make a value constant.
// when a value is assinged with const it cannot be modufied later.

console.log(a + b);
console.log(typeof a,typeof b,typeof c);

let x = "Keshar";
let y = 22;
let z = 3.55;
let p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r));

// object has a key value pair

let o = {
    "name" : "Keshar",
    "job code" : 5600,
    is_beautiful : true,
}
console.log(o);

o.salary = "100crore";
console.log(o);

o.salary = "500crore";
console.log(o);