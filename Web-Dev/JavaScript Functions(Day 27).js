// console.log("Hey Keshar you are nice!");
// console.log("Hey Keshar you are good!");
// console.log("Hey Keshar you're t-shirt is nice!");
// console.log("Hey Keshar you are good");

function nice(name) {
    console.log("Hey " + name + "you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you're t-shirt is nice!");
    console.log("Hey " + name + " you are good");
}

nice("Keshar")
nice("Muskan")

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

result1 = sum (3,5)
result2 = sum (7,5)
result3 = sum (3,13)

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// Arrow function

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(34);
func1(66);
func1(88);