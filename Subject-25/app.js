// Callback  Fonsksiyonlar

//const langs = ["Python", "Java","C++"]

// langs.forEach(function(langs){
//     console.log(langs)
// })


// document.getElementById("btn").addEventListener("click",function(){
//      console.log("tıkla")
// })


//Asenkron işlemler
function process1(){
   setTimeout(function(){
        console.log("process1")
   },3000)
}
function process2(){
  setTimeout(function(){
    console.log("process2")
  },2000)
}

//process1()
//process2()

//console.log("naber")

//senkron işlemler
function process1(callback){
    setTimeout(function(){
         console.log("process1")
         callback()
    },3000)
 }
 function process2(){
   setTimeout(function(){
     console.log("process2")
   },2000)
 }
 
 //process1(process2)
 
 const langs = ["Python", "Java","C++"]

 function addLang(lang,callback){
     setTimeout(function(){
         langs.push(lang)
         console.log("eklendi")
         callback()
     },2000)

 }

 function getAlllangs(){
     setTimeout(function(){
         langs.forEach(function(lang){
             console.log(lang)
         })
     },1000)
 }

 addLang("javascript",getAlllangs)
