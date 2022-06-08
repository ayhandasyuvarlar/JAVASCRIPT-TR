// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference


document.getElementById("btn").addEventListener("click",function(){

    //XML Httprequest

    const xhr = new XMLHttpRequest();
// Before metod
    xhr.onprogress = function(){
        console.log("process loading...")  // in process 3  
    }
    xhr.onload = function(){
        if(this.status === 200){ //in process 4
            console.log(this.responseText)
            document.getElementById("ajax").innerHTML = this.responseText
        }
    }
    // xhr.onreadystatechange = function(){
    //    if(this.status == 200 && this.readyState == 4 ){   //After Metod
    //        console.log(this.responseText)            
    //    }
    // }
    xhr.open("GET","example.txt",true);

    xhr.send();
})