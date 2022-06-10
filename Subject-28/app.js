// function getData(data){
//     return new Promise(function(resolve,reject){
//        setTimeout(function(){
//          if(typeof data === "string"){
//           resolve(data)
//          }else{
//            reject( new Error("Please , string enter a value"))
//          }
//        },5000)

//     })
// } // promise objesi dönüştüren  fonksiyon
 


// getData(24)
// .then(response =>{ console.log(response)})
// .catch(err =>{console.error(err)})



function addTo(number){
    return new Promise((resolve, reject) =>{
        setTimeout( ()=>{
              if(typeof number === "number"){
                  resolve(number + 2)
              }
              else(
                  reject(new Error("Please , number enter a value"))
              )
        },3000)
    })
}

addTo(25)
.then(response =>{
    console.log(response)
    return response *3*3;
})
.then(response2 =>{
    console.log(response2)
})
.catch(err => {
    console.error(err)
})