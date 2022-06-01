// Local Storage

// SetItem

// localStorage.setItem("hareket" , "burpee")

// Get Item

//const value = localStorage.getItem("hareket")

//console.log( value)

// Clear Local Storage

//localStorage.clear();

localStorage.setItem("hareket", "burpee");

//console.log(localStorage.getItem("sport"));

if(localStorage.getItem("hareket" )=== null){
  console.log("Sorguladığınız veri bulunmuyor")
}
else {
    console.log("Sorguladığınız veri gelindi")
}



/// Local Stroge - Array yazma


const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos" ,JSON.stringify(todos));
const value = JSON.parse(localStorage.getItem("todos"))
console.log(value)