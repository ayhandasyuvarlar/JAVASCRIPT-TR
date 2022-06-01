/* Klavye Eventleri*/

//keypres

/*document.addEventListener("keypress",run())
function run(event){
  //console.log(event.which) /* bastıgınız tuşun aslı tablosundaki değeri gösterir 
  if(event.key == l){ //bastıgınız tuşu gösterir 
      console.log("l tuşuna bastınız")
  }
}*/

// keydown
/*document.addEventListener("keydown",run)
function run(e){
    console.log(e.key)  // bu daha kullanışlı
}*/


//keyup
/*document.addEventListener("keyup", run)
function run(e){
    console.log(e.key)  // tuşa basılıp bırakıldığında çalışır
}*/

const header = document.querySelector(".card-header")
const todoInput = document.querySelector("#todo")

todoInput.addEventListener("keyup",changeText)

function changeText(e){
    header.textContent= e.target.value;
    header.style.color ="gold"
}