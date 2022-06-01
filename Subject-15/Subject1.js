//Elementleri Id'e göre seçme

let element ;

element = document.getElementById("todo-form")
element = document.getElementById("task-title")

// Elementleri Classlara göre seçme

element = document.getElementsByClassName("list-group-item")
element = document.getElementsByClassName("card-header")

//Element Tag'a göre seçme

element = document.getElementsByTagName("li")
element = document.getElementsByTagName("div")

// Query Selector - Css Selector -saddece tek bir elementi seçiyor

 element = document.querySelector("#todo-form");
 element = document.querySelector("#task-title");


 element = document.querySelector(".list-group-item");
 element = document.querySelector(".card-header");

 element = document.querySelector("li");
 element = document.querySelector("div");

 // Query SelectorAll -ona ait tüm elementleri seçer
 element = document.querySelectorAll("#todo-form");
 element = document.querySelectorAll("#task-title");


 element = document.querySelectorAll(".list-group-item");
 element = document.querySelectorAll(".card-header");

 element = document.querySelectorAll("li");
 element = document.querySelectorAll("div");
 element.forEach(function(el){
     console.log(el)
 })
console.log(element)