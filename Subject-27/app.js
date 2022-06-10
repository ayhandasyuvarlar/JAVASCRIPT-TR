// Ajax , Callback ,  hhtp request


class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
        
    }

    // Get Request

    get(url,callback){
        this.xhr.open("GET",url)

        this.xhr.onload =() =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }else{
                callback("Herhangi bir hata oluştu", null)
            }
        }

        this.xhr.send();
    }
    post(url, data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json")
        this.xhr.onload = ()=>{
            if(this.xhr.status === 201){
                callback(null ,this.xhr.responseText)   
            }
            else{
                callback("herhangi bir hata oluştu",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
    put(url, data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json")
        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null ,this.xhr.responseText)   
            }
            else{
                callback("herhangi bir hata oluştu",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
    delete(url,callback){
        this.xhr.open("DELETE",url)

        this.xhr.onload =() =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }else{
                callback("Herhangi bir hata oluştu", null)
            }
        }

        this.xhr.send();
    }
    

}
// let list = document.getElementById("bag");
 const request = new Request()
// request.get("https://jsonplaceholder.typicode.com/albums/1/photos" , function(err,response){
//  if(err === null){
//      function getText(){
//          setTimeout(function(callback){
//             let list = document.getElementById("bag");
//             list.innerText="loading...";
//             callback(pushText())
//         },2000)
//      }
//      function pushText(){
//         setTimeout(function(){
//             let listhtml = document.getElementById("knka") 
//             const emp = JSON.parse(response) 
//             emp.forEach(function(e){
//                 listhtml.innerHTML += `<p>${e.title}</p>`
//             })  
//             list.style.display ="none"
//         },2000)
//     }
//     getText(pushText)
  
//  }else{
//      console.log(err)
//  }
// })

// request.post("https://jsonplaceholder.typicode.com/albums/1/photos",{
//     "albumId": 5,
//     "title": "nihil at amet non hic quia qui",
//     "url": "https://via.placeholder.com/600/1ee8a4",
//     "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
// },function(err,album){
//     if(err ===null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })
request.put("https://jsonplaceholder.typicode.com/albums/1",{
    "albumId": 5,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
},function(err,album){
    if(err ===null){
        console.log(album)
    }
    else{
        console.log(err)
    }
})

request.delete("https://jsonplaceholder.typicode.com/albums/10" , function(err,response){ 
    if(err === null){
        console.log(response, "veri silme işlemi başarılı")
    }
    else{
       console.log(err)
    }
})