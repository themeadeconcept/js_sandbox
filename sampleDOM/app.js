// set local storage item

// local storage will stay until you manually clear it out

// session storage will leave once browser closes

// //set local
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

//set session
// sessionStorage.setItem("name", "Beth");

// remove from storage
// localStorage.removeItem("name");

// get from storage
// const name = localStorage.getItem("name");
// const name = localStorage.getItem("name");
// console.log(name);

// // clear local storage
// localStorage.clear();

// console.log(age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
