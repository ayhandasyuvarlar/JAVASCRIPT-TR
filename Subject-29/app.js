function getTextFile() {
  fetch('example.txt')
    .then((response) => {
      return response.text()
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err)
    })
}
//getTextFile()
function getJsonFile(){
        fetch("example.json")
        .then(response =>{
            return response.text()
        })
        .then(data =>{
            console.log(data)
        })
        .catch(err =>{
            console.error(err)
        })
}

getJsonFile();