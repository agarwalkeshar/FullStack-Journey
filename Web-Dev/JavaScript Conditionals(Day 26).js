console.log("Hello I am conditional tutorial");

let age = 18;
let grace = 2;

// age+=grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)


if(age == 18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
// Comparison Operator

// == equal to sign. used to check if the given value is same as the mentioned variable.
// != not equal to sign. used to check if the given value is not same as the mentioned variable.
// === equal value and type sign. It is used to check if both the value and type of the variable is same.
// !== not equal value or not type sign. It is used to check if both the value and type of the variable are not same.
// > greater than sign. Used to compare or chefck if the value if greater or not. 
// < less than sign. Used to compare or check if the value if less or not. 
// >= greater than or equal to sign. Used to compare or check if the value if greater than or equal to the mentioned variable. 
// <= less than or equal to sign. Used to compare or check if the value if less than or equal to the mentioned variable.
// ? ternary operator. 

// Logical Operator

// && = Logical AND. Both the comditions should be "true" for the answer to be true.
// || = Logical OR. Any 1  conditions can be "true" for the answer to be true.
// ! = Logical NOT. Opposite

if(age!=18){
    console.log("You can drive");
}
else if(age == 0){
    console.log("Are you kidding");
}
else{
    console.log("You cannot drive")
}

// Ternary Operator
let a = 6;
let b = 8;

let c = a>b ? (a - b) : (a + b);

// the question is asked as if a is greater than b?. If it is true, the first option (a - b) will be executed otherwise (a + b) will be executed. 
// It is a shorcut form intsead of using if-else.cd ~/Desktop/FullStack-Journey/FullStack-Journey