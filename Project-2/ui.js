function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <div class="card" id="films" style="width: 18rem;">
        <img src="${newFilm.url}" class="card-img-top" alt="...">
        <div class="card-body">
                <p class="card-text">${newFilm.title}</p>
                <p class="card-text">${newFilm.director}</p>
        </div>
   </div>
`
}

UI.prototype.clearInput = function(element1, element2 ,element3){
    element1.value = ""
    element2.value=""
    element3.value=""
}