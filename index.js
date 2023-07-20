console.log("welcome");
let arr = [];
let nameInput = document.getElementById("name");
let nameEntered = "";
nameInput.addEventListener("keyup", function(e) {
  nameEntered = e.target.value;
  console.log(nameEntered);
})
let emailInput = document.getElementById("email");
let emailEntered = "";
emailInput.addEventListener("keyup", function(e) {
  emailEntered = e.target.value;
  console.log(emailEntered);
})
let numberInput = document.getElementById("number");
let numberEntered = "";
numberInput.addEventListener("keyup", function(e) {
  numberEntered = e.target.value;
  console.log(numberEntered);
})
let myForm = document.getElementById("my-form");
console.log(myForm);
myForm.addEventListener("submit",function(e) {
  e.preventDefault();
  let userData = {
    name:nameEntered,
    email:emailEntered,
    Phone:numberEntered
  }
  arr.push(userData);
  console.log(arr);
  let jsonUserData = JSON.stringify(arr);
  localStorage.setItem("user",jsonUserData);
  updateList();
})
function updateList() {
  let parent = document.getElementById("list");
  parent.innerHTML = ""
  arr.forEach((userData) => {
    let newLi = document.createElement("li");
    newLi.textContent = `${userData.name} - ${userData.email} - ${userData.Phone}`;
    parent.appendChild(newLi);
  })
}