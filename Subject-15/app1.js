// // Dinamic Element Delete

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// // Remove Function

// // todos[1].remove;

// // Remove child

// todoList.removeChild(todos[2]);  // dinamik olarak silmenin en sağlıklı yolu

// // Replace
//  const cardbody = document.querySelectorAll(".card-body")[1]
//  const newElement = document.createElement("h3")
//  newElement.className = "card-title"
//  newElement.id = "tasks-title"
//  newElement.textContent = "Yeni Todolar"

// // eski element

// const oldElement = document.querySelector("#tasks-title")
// cardbody.replaceChild(newElement,oldElement)

//  console.log(cardbody)

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList.length;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass1");
// todoInput.classList.remove("newClass")
// element = todoInput;

element = todoInput 
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder")
element = todoInput.setAttribute("placeholder" , "Lütfen bir todo girin")
element = todoInput.setAttribute("title" , "Input")
element = todoInput.hasAttribute("name")
todoInput = todoInput.removeAttribute("name")

console.log(element);
