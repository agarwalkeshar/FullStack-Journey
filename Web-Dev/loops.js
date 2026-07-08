let a = [1, 93, 5, 6, 8,];


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })

let obj = {
    a: 1,
    b: 2,
    c: 3,
}
// for-in is used in context of an object

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;

//     const element = obj[key];
//     console.log(element);
// }

// for-of 

for (const element of a) {
    console.log(element);
}
// map() creates a new array by performing some operations on each array element