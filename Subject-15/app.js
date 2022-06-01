// new element create dinamic

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı bir sayfaya git"));
cardBody.appendChild(newLink);

// Text NOde

// const  text = document.createTextNode("linke git")
// cardBody.appendChild(text);

console.log(newLink);
