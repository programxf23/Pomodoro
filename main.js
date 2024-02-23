const task = []; //almaceno en el array cada una de las tareas
let time = 0; //tiempo que me va a llevar la cuenta regresiva
let timer = null;
let timerBreak = null; // break de los 5 minutos de descanso
let current = 0; 

const bAdd = docuemtn.querySelector('#bAdd');
const itTask = docuemtn.querySelector('#itTask');
const form = docuemtn.querySelector('#form');

//creo una funcion para que se ejecute al accionar el submit
form.addEventListener('submit', e =>{ //funcion anonima
e.preventDefault();

if(itTask.value !== ''){
    createTask(itTask.value);   
    
    //una vez que ingreso la tarea elimino el texto del input
    itTask.value = '';
}

});

//creamos la funcion para crear la tarea:
function createTask(value) {
    const newTask = {
        id : Math.random(),
        task: value,
        completed : false,
    };


}