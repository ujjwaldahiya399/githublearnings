console.log("hiiiiii");
let nameInpu = document.getElementById("name")
// console.log(nameInpu.value);
var nameEntered ="";
nameInpu.addEventListener("keyup", function(e) {
  nameEntered = e.target.value;
  // console.log(nameInpu.value);
  // console.log(e.target.value);
});
let emailInput = document.getElementById("email");
var emailEntered = "" ;
emailInput.addEventListener("keyup", function(e) {
  emailEntered = e.target.value;
})
let form = document.getElementById("my-form");
form.addEventListener("submit",function(e) {
  e.preventDefault();
  console.log("submit");
  if (nameEntered === "" || !emailEntered === "") {
    alert("Please enter input fields");
  } else {
    console.log(nameEntered,emailEntered);
    localStorage.setItem("name",nameEntered);
    localStorage.setItem("email",emailEntered);
  }
});