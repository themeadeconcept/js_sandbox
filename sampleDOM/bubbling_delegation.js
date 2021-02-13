// EVENT BUBBLING

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card title");
// });
// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });
// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });
// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

// EVENT DELEGATION

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item") {
  //   console.log("delete item");
  // }
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}

// event delegation means to put listening on parent, and then putting condition in function to find target, and doing the functionality
