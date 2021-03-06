const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const subjectElement = document.querySelector("#subject");
const textareaElement = document.querySelector("#textarea");
const dateElement = document.querySelector("#date");
const clear = document.getElementById("clear-films")

// UI object start
const ui = new UI()
//
const storage = new Storage()

// Loading all events

eventListeners()
function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value
    const date = dateElement.value
    const subject = subjectElement.value
    const textarea = textareaElement.value
    if (title === "" || director === "" || url === "" || date === "" || subject === "" || textarea === "") {
        ui.displayMessages("Tüm alanları doldurun", "danger")
    }
    else {
        //New Film
        const newFilm = new Film(title, director, url, textarea, date, subject)

        storage.addFilmToStorage(newFilm)  //storage to add film
        ui.addFilmToUI(newFilm); // Frontend film add
        ui.displayMessages("Film Başarıyla eklendi", "success")
    }
    ui.clearInput(titleElement, urlElement, directorElement, dateElement, subjectElement, textareaElement);

    e.preventDefault();
}
function clearAllFilms() {
  if(confirm("Emin misiniz ?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
  }
}