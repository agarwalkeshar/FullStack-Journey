console.log("This is strings tutorial");
let a = "Keshar";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);

// Template literals

let real_name = "Rohan";
let friend = "Harsh";

console.log("His name is " + real_name + " and his friend's name is " + friend);
// using backticks (``)
console.log(`His name is ${real_name} and his friend's name is ${friend}`);

// We can insert variables directly in template literals. This is called "string interpolation".

// Escape Sequence Characters

/*
1. To add a single quote (' ') or a doule quote (" ") in a sentence, we can use "Escape Sequence Characters".
    using \" or \' will allow inserting an ' and " into the sentence.
2. \n - Newline character
3. \t - Tab character
4. \r - Carriage retutn
*/

/*
String Properties and methods
1. string_name.length = displays the length of the string
2. string_name.toUpperCase() = converts all the letters to UpperCase
3. string_name.toLowerCase() = converts all the letters to LowerCase
*/
let b = "Harry";

console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

// "slice()" requires 2 values. 1st value is inclusive and the 2nd value is exclusive. which means the 2nd value's index position will not be considered.
console.log(b.slice(1,4));
// Output - arr

// This will start from the index position 1 till the end because the last position has not been mentioned
console.log(b.slice(1));
// Output - arry

// "Replace" is used to replace the word or a letter
console.log(b.replace("H","L"));
console.log(b.replace("Ha","Fe"));
// if the term which is to be replaced has occurred twice then the 1st occurrence will only be replaced.

// Concat is used to joint 2 or more strings together
console.log(a.concat(" "+b, " Yash", " Swara"));

// trim() is used to remove whitespaces
console.log(a.trim());

// Strings are immutable
// To modify a string, we have to create a new string and make the modifications and save it into it.

// charAt() returns the value at particiular index position
console.log(b.charAt(0))

// indexOf(a) retuns the index positionof the mentioned character
console.log(a.indexOf(a))

// startsWith() and endsWith() returns a boolean value true or false if the mentioned character satisfies the condition
console.log(a.startsWith("K"));
console.log(b.endsWith("a"));