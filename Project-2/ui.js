function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <div class="card" id="films" style="width: 18rem;">
        <img src="${newFilm.url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-text title">${newFilm.title}</h2>
                <p class="card-text">${newFilm.director}</p>
                <p class="card-text">${newFilm.date}</p>
                <p class="card-text subject">${newFilm.subject}</p>
                <p class="card-text">${newFilm.textarea}</p>
                <button class="btn btn-primary">Movie</button>
        </div>
   </div>
`
}

UI.prototype.clearInput = function (element1, element2, element3, element4, element5, element6) {
    element1.value = ""
    element2.value = ""
    element3.value = ""
    element4.value = ""
    element5.value = ""
    element6.value = ""
}
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body")
    // Alert div to create
    const div = document.createElement("div")
    div.className = `alert  alert-${type}`
    div.textContent = message
    div.style.marginTop = "10px"
    cardBody.appendChild(div)

    setTimeout(function () {
        div.remove();
    }, 1000)
}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `
   <div class="card-container" style="max-width: 22rem;>
   <div class="card" id="films" style="max-width: 20rem;">
   <img src="${film.url}" class="card-img-top" alt="...">
   <div class="card-body">
           <h2 class="title">${film.title}</h2>
           <p class="card-text subject"><span>Movie Subject : </span>${film.subject}</p>
           <p class="card-text"><span>Movie Director : </span>${film.director}</p>
             <p class="card-text"><span>Movie Date : </span>${film.date}</p>
           <p class="card-text">${film.textarea}</p>
           <button class="btn btn-primary">Movie</button>
   </div>
</div>
   </div>
     `
    })
}

UI.prototype.clearAllFilmsFromUI = function(){
    const filmsList = document.getElementById("films")
    while(filmsList.firstElementChild !== null){
            filmsList.firstElementChild.remove();
    }
    
}