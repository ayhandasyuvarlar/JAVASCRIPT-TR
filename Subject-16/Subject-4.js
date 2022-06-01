// Input Event

const filterInput = document.getElementById("filter")

// document.addEventListener("DOMContentLoaded",load)

// function load(e){  //önemli
//     console.log("sayfa yüklendi")
// }

// Focus Event

// filterInput.addEventListener("focus", run)

// Blur Event

//filterInput.addEventListener("blur", run)

// Paste 

// filterInput.addEventListener("paste", run)

//copy 

// filterInput.addEventListener("copy", run)

//cut
// filterInput.addEventListener("cut", run)  //input içerisindeki kes derseniz

// select

filterInput.addEventListener("select", run)


function run (e){
    console.log(e.type)
}