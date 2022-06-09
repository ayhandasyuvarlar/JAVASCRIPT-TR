document.getElementById("ajax").addEventListener("click", getAllEmployess)

function getAllEmployess() {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "Employes.json", true);

    xhr.onload = function () {
        let list = document.getElementById("employees")
        if (this.status === 200) {
            console.log("veri geldi")
            const employes = JSON.parse(this.responseText)
            employes.forEach(function(e){
                   list.innerHTML += `
                   <tr>
                        <td>${e.name}</td>
                        <td>${e.department}</td>
                        <td>${e.salary}</td>
                   </tr>
                   `
            })
        }
    }

    xhr.send();

}