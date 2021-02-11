let val;

val = document;
val = document.all; // returns a collection of ALL HTML elements
val = document.all[0]; // returns element at the index. this would be HTML element
val = document.all.length; // returns the number of HTML elements
val = document.head; // just the header
val = document.body; // just the body
val = document.doctype; //shows HTML5 Doctype
val = document.domain; //gives loop back address
val = document.URL; // gives protocol, port and page
val = document.characterSet;
val = document.contentType; //what kind of page is this?

val = document.forms;
val = document.forms[0];
val = document.forms[0].id; //gets id
val = document.forms[0].method; //gets method
val = document.forms[0].action; // could return index.php

val = document.links; // shows all links
val = document.links[0]; // access a link
val = document.links[0].id; // access a link
val = document.links[0].className; // id
val = document.links[0].className; // gives a string of all classes
val = document.links[0].classList; // DOM token list of classes

val = document.images; // collection of images

val = document.scripts; // collection of all scripts
val = document.scripts[2].getAttribute("src"); // would return app.js

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
