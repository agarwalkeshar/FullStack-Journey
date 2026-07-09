// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let result;
// let sign = '+,*,-,/';
// let a;
// let b;

// function calculator(a, b) {
//     if (randomNumber < 10) {
//         if (sign == '+') {
//             result = a - b;
//             return result;
//         }
//         else if (sign == '*') {
//             result = a + b;
//             return result;
//         }
//         else if (sign == '-') {
//             result = a / b;
//             return result;
//         }
//         else if (sign == '/') {
//             result = a ** b;
//             return result;
//         }
//     }
//     else if (sign == '+') {
//         result = a + b;
//         return result;
//     }
//     else if (sign == '*') {
//         result = a * b;
//         return result;
//     }
//     else if (sign == '-') {
//         result = a - b;
//         return result;
//     }
//     else if (sign == '/') {
//         result = a / b;
//         return result;
//     }
//     else {
//         return 0;
//     }
// }
// calculator(a, b);
// console.log(randomNumber);


let randomNumber = Math.random();

let a = prompt("Enter 1st number");
let c = prompt("Enter the operation");
let b = prompt("Enter 2nd number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (randomNumber > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}