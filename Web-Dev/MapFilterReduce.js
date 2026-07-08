let arr = [1, 13, 5, 7, 11];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
//     console.log(newArr)
// }
// Shorter method to perform this task is "map() method"

// can also be written as
//let newArr = arr.map(e, index, array=>{

/*
let newArr = arr.map(e=>{
return e**2;
})
console.log(newArr);
*/

// filter() an array with values that passes a test. Creates a new array

/*
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))
*/

// reduce method - reduces an array to a single value

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red))

// Array.from method is used to create an array from any other object 

console.log(Array.from("Keshar"));