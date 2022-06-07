const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title",)
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI object start
const ui =new UI()

// Loading all events

eventListeners()

function eventListeners(){
    form.addEventListener("submit" ,addFilm)
}

function addFilm(e){
    const title = titleElement.value 
    const director = directorElement.value
    const url = urlElement.value
    if(title === "" || director === "" || url===""){
      ui.displayMessages("Tüm alanları doldurun" , "danger")
    }
    else{
        //New Film
        const newFilm = new Film(title,director,url)
        ui.addFilmToUI(newFilm); // Frontend film add
        
    }
    ui.displayMessages("Film Başarıyla eklendi" , "success")
    ui.clearInput(titleElement,urlElement,directorElement);

    e.preventDefault();
}