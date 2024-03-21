class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor(){
        this.activities = [];
        this.cont = 1;
    }
    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.cont, title, description, imgUrl)
        this.nexId++;

        this.activities.push(newActivity)
    }

    deleteActivity(id){
        this.activities.filter(activity => activity.id !== id)
    }
}

const newActivity = new Activity(1, 'ejercicio', 'Hacer ejercicio', 'personasCorriendo');
const repository = new Repository();
const converToHtml = (activity) => {
    const {id, title, description, imgUrl}= activity;
    const documentElement = document.createElement('div');
    documentElement.classList.add('card');

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = title;
    titleElement.classList.add('title-class') //puedo poner tambien classname

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML =description;
    descriptionElement.className ='description-class'

    const imgUrlElement = document.createElement('img');
    imgUrlElement.src = imgUrl;

    documentElement.appendChild(titleElement);
    documentElement.appendChild(descriptionElement);
    documentElement.appendChild(imgUrlElement);

    return documentElement;
}

function agregarTodasLasActividadesAlContenedor() {
    const contenedorActividades = document.getElementById('container-activities');
    contenedorActividades.innerHTML = ''; // Vaciar el contenido actual del contenedor
    const activities = repository.getAllActivities();
    const actividadesHTML = activities.map(actividad => converToHtml(actividad));

    actividadesHTML.forEach(actividadHTML => {
        contenedorActividades.appendChild(actividadHTML);
    });
}

function handlerButton(event) {
    event.preventDefault();
    const titleImput = document.getElementById("title-imput")
    const descriptionImput = document.getElementById("descripcion-imput")
    const imgImput = document.getElementById("img-imput")

    const titleValue = titleImput.value;
    const descriptionValue = descriptionImput.value;
    const imgValue = imgImput.value;

    if(!titleValue || !descriptionValue || !imgValue){
        return alert("Por Favor Llene Todos Los Campos")
    }

    repository.createActivity(titleValue, descriptionValue,imgValue)
    agregarTodasLasActividadesAlContenedor()
}

const button = document.getElementById("create-activity-button")
button.addEventListener("click", handlerButton )


// module.exports = {
//     Activity,
//     Repository,
// };


