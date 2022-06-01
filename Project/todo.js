// ilk aşama elementleri seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firsCard = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  // Tüm event listeler
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e){
     // todoları arayüzden kaldırma 
     if(confirm("Tümünü silmek istediğinizden emin misiniz ?")){
      // todoList.innerHTML = "";  //yavaş yöntem
     setTimeout(function(){
      while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild)
      }
     },2000)
     showAlert("success", ":)", "Başarıyla silindi...");
      localStorage.removeItem("todos");
     }

}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      //BULUMADI
      listItem.setAttribute("style", "display:none !important");
    }
     else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

function deleteTodo(event) {
  if (event.target.className === "fa fa-remove") {
    event.target.parentElement.parentElement.remove();
    // deleteTodoFromStoroge(event.target.parentElement.parentElement.remove());

    showAlert("success", ":)", "Başarıyla silindi...");
  }
}

/*function deleteTodoFromStoroge(deletetodo) {  // bu fonksiyona bakılacak
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}*/

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo); // sayfa yeniden yüklendikten  sonra tekrar localde depolanan verinin gelmesi
  });
}

function addTodo(event) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", ":(", "Lütfen bir todo girin..");
  } else {
    addTodoToUI(newTodo);
    addTodoToStoroge(newTodo);
    showAlert("success", ":)", "başarıyla eklendi");
  }
  addTodoToUI(newTodo);
  event.preventDefault();
}

function showAlert(type, message, icon) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = icon;
  alert.textContent = icon + message;
  firsCard.appendChild(alert);
  // setTimeout
  setTimeout(function () {
    alert.remove();
  }, 1000);
}

function getTodosFromStorage() {
  // Storogedan todoları alma
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStoroge(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoToUI(newTodo) {
  // string değeri alır list iteme ekleyecek

  // List Item oluşturma
  const listItem = document.createElement("li");
  // Link oluşturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = " <i class ='fa fa-remove'></i>";

  // Text node ekleme
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  // Todo liste List ıtem'i ekleme
  todoList.appendChild(listItem);
  todoInput.value = "";
}
