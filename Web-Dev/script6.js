
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "pink"

// document.getElementById - This method is used to get the element with a given "id" attribute. An "Id" is a unique attribute and the same Id cannot be repeated in some other element.
document.getElementById("pink").style.backgroundColor = "pink";

// document.querySelectorAll - Returns all elements inside an element matching the given CSS Selector. It returns "NodeList"
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

// document.querySelector - Returns the first element for the given CSS Selector. A efficient version of elem.querySelectorAll (CSS) [0]
document.querySelector(".box").style.backgroundColor = "green";

// document.getElementbyTagName - Returns elements with the given Tag Name. It returns "HTMLCollections"
document.getElementsByTagName("div");
// Returns all the div elements that are present on the document.

// document.getElementsbyClassName -  Returns elements that given CSS Class (Here, "Elements" refer that the same class name can be used for multiple elements,)

// document.getElementsbyName -  Searches elements by the name attribute.

// elem.matches(CSS) - To check if element matches the given CSS selectors.
e = document.getElementsByTagName("div");
e[4].matches("redbox");
// returns "True"

e[3].matches("redbox");
// returns "False"

// elem.closest(CSS) - To look for the nearest ancestor that matches the gievn CSS selectors. The elem itself is also checked.
e[4].closest("redbox");
// Returns null
e[4].closest(".container");
// Returns the nearest ancestor or parent

// elem.contains(elem) - Returns true if elemB is inside elemA (a descendant of elemA) or when elemA == elemB 
document.querySelector(".container").contains(e[2]);
// Returns "True"
document.querySelector(".container").contains(document.querySelector("body"));
// Returns "False"