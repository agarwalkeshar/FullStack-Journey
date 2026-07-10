console.log("Hello World");
document.body
document.body.childNodes;
document.body.childNodes[0];
document.body.childNodes[1];
document.body.childNodes[1].childNodes;
// Output - NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
/*
Here, text represents the blank space that is there after the div.container and before div.box. It is also referred as text node.
*/

let cont = document.body.childNodes[1];
console.log(cont.firstChild);
console.log(cont.lastChild);

// Here, both firstChild and lastChild are text nodes. It represents the blank space. In order to receive the element that is present inside the div as the first child we can use firstElementChild
// Comment is also considered as a text node

console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "pink";

cont.lastElementChild.parentElement
// Displays the parent element of the lastElementChild

document.body.firstElementChild.childNodes;
document.body.firstElementChild.children;
// This will display all the boxes that are child nodes of div container.

document.body.firstElementChild.children[1].nextElementSibling;
// This will return the next sibling that there right after it.

document.body.firstElementChild.children[1].previousElementSibling;
// This will return the previous sibling that there before after it.

document.body.firstElementChild.children[1].parentElement;

document.body.children[1];
// used to access table as it is the second child

document.body.children[1].rows;
// displays total no of rows

document.body.children[1].tBodies;

// HTMLCollection [tbody]0: tbody
// length: 1
// [[Prototype]]: HTMLCollection

document.body.children[1].caption;
// displays the caption

document.body.children[1].tHead
// displays the header

document.body.children[1].tFoot
// displays the footer
