let arr = [1, 2, 4, 5, 7];
let arr1 = [8, 9, 3, 6, 10];

// arrays are mutable
arr[0] = 56;
// value at 0th index will grt chenged from 1 to 56

// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// array will be displayed as a comma separated srting
// console.log(arr.toString());

// Output - 56,2,4,5,7

// join() - joins all the array elements using a separator
// console.log(arr.join(" and "));

// Output - 56 and 2 and 4 and 5 and 7

// pop() removes the last element from the array

// console.log(arr.pop());
// console.log(arr.pop());

// push() adds an element at the end of an array

// console.log(arr.push(100));
// console.log(arr);

// shift() - removes first element and returns it.

// console.log(arr.shift());
// console.log(arr);

// unshift() - Adds element to the beginning. Returns new array length.

// console.log(arr.unshift(11));
// console.log(arr.unshift('keshar'));
// console.log(arr);

// delete - array elements can be deleted using delete operator, but the memory allocated to that element will   remain there only. Which means after removing the element, the space will be name as "undefined" and the length of the arr will also remain the same

// delete arr[1];
// delete arr[5];
// console.log(arr);

// concat() - used to join 2 or more arrays together. It does not change the existing array

// console.log(arr.concat(arr1));

// sort() - This method is used to sort the array alphabetically/ascending order.
// sort() takes an optional compare function. If this function is provided as the first argument, the sort() function will consider these values (the values returned from the compare function) as the basis of sorting.

// splice() - This method can be used to remove and add new items to an array

// let numbers = [1,2,3,4,5];

// 1st value indicates the starting index position and the 2nd value indicates how many elements do we have to remove. Here, 1 indicates 1st index position and 2 indicates 2 values(2 and 3)to be removed.

// console.log(numbers.splice(1,2))

// this can also be used when we want to remove some values and add some values. After the values are removed, the new values will be added to the mentioned index position.

// console.log(numbers.splice(1,2,222,333));
// console.log(numbers);

// slice() - slices out a piece from an array. It creates a new array
// here 2 indicates that the slicing shoud start from the 2nd index position till the end
// console.log(arr.slice(2));

// here 2 indicates that the slicing shoud start from the 2nd index position and 4 is exclusive. So element at the 4th index position is not included. So only 2nd and 3rd index values will be displayed.
// console.log(arr.slice(2,4));

// reverse() - reverses the elements in the source array