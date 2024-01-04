let itemContainer = document.getElementById("addListItems");
let itemList = [];
let addButton = document.getElementById("submitValue");
let deleteButton = document.getElementsByClassName(".deleteButton");
let inputElement = document.getElementById("addValue");

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let writtenItem = inputElement.value;

    if (checkIfUnique(writtenItem)) {
      itemList.push(writtenItem);
      addItem(writtenItem);
      inputElement.value = "";
    } else if (checkIfUnique(writtenItem) === false) {
      inputElement.value = "";
    }
  }
});

addButton.addEventListener("click", () => {
  let writtenItem = inputElement.value;

  if (checkIfUnique(writtenItem)) {
    itemList.push(writtenItem);
    addItem(writtenItem);
    inputElement.value = "";
  } else if (checkIfUnique(writtenItem) === false) {
    inputElement.value = "";
  }
});

function addItem(item) {
  let wantedItem = document.createElement("li");
  wantedItem.innerText =
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

  deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.innerText = "X";

  itemContainer.append(wantedItem);
  wantedItem.append(deleteButton);

  deleteButton.addEventListener("click", function () {
    console.log("deleteButton clicked");

    let itemToRemove = this.parentNode.firstChild.nodeValue.toLowerCase();
    let index = itemList.findIndex(
      (item) => item.toLowerCase() === itemToRemove
    );

    if (index !== -1) {
      itemList.splice(index, 1);
      console.log("List after removal: ", itemList);
    }

    this.parentNode.remove();
  });
}

function checkIfUnique(item) {
  for (let i = 0; i < item.length; i++) {
    if (!itemList.includes(item)) {
      return true;
    } else {
      console.log("Item already exist on the list");
      return false;
    }
  }
}
