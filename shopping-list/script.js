const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const ClearList = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
//add item

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem === "") {
    alert(" Please Add item ");
    return;
  }

  // create List item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  console.log(li);

  // add item to the dom
  itemList.appendChild(li);

  chekcUi();
  itemInput.value = "";
}

//createButton
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);

  return button;
}

//createIcon
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// function removeItem(e) {
//   if (e.target.parentElement.classList.contains("remove-item")) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

function removeItem(e) {
  // Check if the clicked element has the class 'remove-item' or if its parent does
  const removeButton = e.target.closest(".remove-item");

  if (removeButton) {
    // Remove the closest parent element (which should be the item itself)
    const itemToRemove = removeButton.parentElement;
    if(confirm ('Are you sure')){

      itemToRemove.remove();

    }
  }

  chekcUi()
}

function clearItems(e) {
  itemList.innerHTML = "";
  ClearList.style.display = "none";
}

function chekcUi() {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    ClearList.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    ClearList.style.display = "block";
    itemFilter.style.display = "block";
  }
}

itemList.addEventListener("click", removeItem);

//Event Listeners
itemForm.addEventListener("submit", addItem);

ClearList.addEventListener("click", clearItems);

chekcUi();
