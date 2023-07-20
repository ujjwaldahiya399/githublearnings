var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.querySelector('#filter');
console.log(filter)
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.querySelectorAll('#item');
  console.log(newItem);
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem[0].value+newItem[1].value));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  let parent = document.querySelectorAll(".list-group-item");
console.log(parent);
// parent[0].appendChild(btn);
// parent[1].appendChild(btn);
for(let i=4;i<=parent.length;i++){
  let btn = document.createElement('button');
  btn.setAttribute("class","btn btn-danger btn-sm float-right edit");
  btn.innerText = "EDIT";
  parent[i].appendChild(btn);
}
}
// parent.forEach((ele) => {
//     // ele.appendChild(btn);
//     let btn = document.createElement('button');
//     btn.setAttribute("class","btn btn-danger btn-sm float-right edit");
//     btn.innerText = "EDIT";
//     ele.appendChild(btn);
// })
// }
// confirm("hii")
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

const filterItems = (e) => {
    let inputStr = e.target.value.toLowerCase();
    let items = document.querySelectorAll(".list-group-item");
    // console.log(items.length);
    Array.from(items).forEach((item) => {
        let itemTxt = item.firstChild.textContent.toLowerCase();
        let descrption = item.childNodes[1].textContent.toLowerCase();
        // console.log(itemTxt);
        if (itemTxt.indexOf(inputStr) !== -1 || itemTxt.indexOf(descrption) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
filter.addEventListener('keyup', filterItems);

// let btn = document.createElement('button');
// btn.setAttribute("class","btn btn-danger btn-sm float-right edit");
// btn.innerText = "EDIT";
// console.log(btn.innerText);
// let parent = document.querySelectorAll(".list-group-item");
// console.log(parent);
// // parent[0].appendChild(btn);
// // parent[1].appendChild(btn);

// parent.forEach((ele) => {
//     // ele.appendChild(btn);
//     let btn = document.createElement('button');
//     btn.setAttribute("class","btn btn-danger btn-sm float-right edit");
//     btn.innerText = "EDIT";
//     ele.appendChild(btn);
// })

