//  Dom Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div container")
// })

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("cardrow")
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("card-body")
// })

//  Dom Capturing veya Delegation

const cardbody = document.querySelectorAll(".card-body")[1]
const todoList = document.getElementsByClassName("list-group-item")
cardbody.addEventListener("click",run)
console.log(todoList)
function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("click")
    }
    else if(e.target.id === "filter") {
        console.log("Filtreleme işlemi")
    }
    else if(e.target.id ==="clear-todos"){
        console.log("Tüm Taskları silme işlemi")
    }
     // bu sayede dinamik olarak eklediğimiz elementlere otomatik atıyor.
} // bu fonskiyon dom ' a dinamik veriler eklediğimiz şeylerde önemli