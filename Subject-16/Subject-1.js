const filterInput = document.getElementById("filter");

/* Focus Eventi */


// filterInput.onfocus = function(){
//   console.log("hello")
// }  // birinci yöntem

// filterInput.addEventListener("focus",function(event){
//     console.log("hello")
//     console.log(event.target)
//     console.log(event.target.placeholder)
//     console.log(event)  // kullanılan en çok yöntem
// })

/* Submit Eventi */
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm())
function submitForm(event){
    console.log("Submit Eventi")
    event.preventDefault()
}