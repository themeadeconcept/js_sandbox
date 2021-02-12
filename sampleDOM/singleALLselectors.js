// // document.getElementById()
// const elem = document.getElementById("task-title");

// console.log(document.getElementById("task-title"));

// // Get things from the element

// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// // Change Styling

// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "#fff";
// document.getElementById("task-title").style.padding = "5px";
// // document.getElementById("task-title").style.display = "none";

// // Change content
// elem.textContent = "Task List";
// elem.innerText = "My Tasks";
// elem.innerHTML = '<span style="color:red;">Task List</span>';

//document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red"; // only selects single element and will change first list item
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccC";
document.querySelector("li:nth-child(even").style.background = "#f4f4f4";
