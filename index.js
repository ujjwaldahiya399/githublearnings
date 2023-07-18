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