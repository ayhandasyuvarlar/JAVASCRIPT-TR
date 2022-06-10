function getData(data){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
        reject("Olumsuz sonuç")
       },5000)

    })
} // promise objesi dönüştüren  fonksiyon
 



console.log(getData("merhaba"))