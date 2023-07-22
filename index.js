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
  let jsonUserData = JSON.stringify(userData);
  localStorage.setItem(userData.email,JSON.stringify(userData));
  myForm.reset()
  updateList();
})
function updateList() {
  let parent = document.getElementById("list");
  parent.innerHTML = ""
  arr.forEach((userData) => {
    let newLi = document.createElement("li");
    newLi.textContent = `${userData.name} - ${userData.email} - ${userData.Phone}`;
    parent.appendChild(newLi);
    let deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click",() => {
      localStorage.removeItem(userData.email);
      parent.removeChild(newLi);
    });
    deleteBtn.textContent = "delete"
    deleteBtn.setAttribute("id", "delete");
    newLi.appendChild(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("id", "edit");
    editBtn.addEventListener("click",() => {
      // console.log("edit")
      let dataFromStorage = localStorage.getItem(userData.email)
      let dataObj = JSON.parse(dataFromStorage);
      const name = dataObj.name;
      const email = dataObj.email;
      const phone = dataObj.Phone;
      console.log(name, email, phone);
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("number").value = phone;
      parent.removeChild(newLi);
      localStorage.removeItem(userData.email);

    })
    newLi .appendChild(editBtn);

  })
}
function deleteTask(e) {
  console.log("delete");

}
