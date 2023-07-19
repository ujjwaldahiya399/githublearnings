let titleEle = document.getElementsByTagName("title")[0];
console.log(titleEle.innerText)
titleEle.innerText = "Hello Dude!";
titleEle.style.border = "2px solid white";
let getItemEle = document.querySelector(".title");
getItemEle.style.fontWeight = "bold";
getItemEle.style.color = "green";
let thirdLiEle = document.getElementsByTagName("li");
thirdLiEle[2].style.backgroundColor = "green"
for(let i = 0; i < thirdLiEle.length; i++) {
    thirdLiEle[i].style.fontWeight = "bold";
}
let newLiEle = document.createElement("li");
newLiEle.innerText = "Item added"
let ulEle = document.querySelector("#items");
ulEle.appendChild(newLiEle);
let newAddedLiEle = document.getElementsByClassName("list-group-item")[4];
console.log(newAddedLiEle);
let newAddedLiEleWithTag = document.getElementsByTagName("li")[4];
console.log(newAddedLiEleWithTag);
newAddedLiEleWithTag.style.fontWeight = "bold";
thirdLiEle[1].style.backgroundColor = "red"
thirdLiEle[2].style.visibility = "hidden";
let allLi = document.querySelectorAll("li");
allLi[1].style.color = "green";
let allOddLi = document.querySelectorAll(":nth-child(odd)");
allOddLi.forEach((li) => {
    li.style.backgroundColor = "green";
})
let parentDiv = document.querySelector("#header-title");
// console.log(parentDiv.parentElement);
// parentDiv.parentElement
parentDiv.parentElement.style.backgroundColor = "white";

let lastElementChild = document.querySelector("#items").lastElementChild; //The property only considers element nodes.
// console.log(lastElementChild);
lastElementChild.style.backgroundColor = "blue";

let lastChild = document.querySelector("#items").lastChild; // This property represents the last child node of the parent, regardless of whether it is an element node, text node, comment node, etc.
lastChild.style.backgroundColor = "red";

let firstElementChild = document.querySelector("#items").firstElementChild;
firstElementChild.style.backgroundColor = "magenta"; 

let firstChildEle = document.querySelector("#items").firstChild; // Gave text node
firstChildEle.innerText = "green";
// console.log(firstChildEle);

let nextSiblibing = document.querySelector("#items").nextSibling; // Gave text node
// console.log(nextSiblibing);

let nextElementSiblng = document.querySelector(".list-group-item").nextElementSibling;
nextElementSiblng.style.backgroundColor = "skyblue";

let previousSblng = document.querySelectorAll(".list-group-item")[2].previousSibling; // text node.
console.log(previousSblng)

let previousSblngEle = document.querySelectorAll(".list-group-item")[2].previousElementSibling; // element node
// console.log(previousSblngEle)
previousSblngEle.style.backgroundColor = "green"


let selectedLi = document.querySelector(".list-group-item");
selectedLi.setAttribute("id","selected")
console.log(selectedLi)

let createdTextnode = document.createTextNode("this is a text node");
selectedLi.appendChild(createdTextnode);