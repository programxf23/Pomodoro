const tasks = []; //almaceno en el array cada una de las tareas
let time = 0; //tiempo que me va a llevar la cuenta regresiva
let timer = null;
let timerBreak = null; // break de los 5 minutos de descanso
let current = 0;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

//creo una funcion para que se ejecute al accionar el submit
form.addEventListener("submit", (e) => {
  //funcion anonima
  e.preventDefault();

  if (itTask.value !== "") {
    createTask(itTask.value);

    //una vez que ingreso la tarea elimino el texto del input
    itTask.value = "";
    renderTasks();
  }
});

//creamos la funcion para crear la tarea:
function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    task: value,
    completed: false,
  };
  tasks.unshift(newTask);
}

//creamos la funcion renderTasks:
function renderTasks() {
  //me toma cada uno de las tareas y me lo inyecta en el html
  const html = tasks.map((task) => {
    return `
      <div class = "task">
      <div class = "completed">${task.completed ? `<span class = "done">Done</span>` : `<button class = "start-button" data-id = "${task.id}">Start</button>`}</div>
      <div class = "title">${task.title}</div>
      
      </div>    
    `;
  });
  const tasksContainer = document.querySelector('#tasks');
  tasksContainer.innerHTML = html.join('');

  const startButton = document.querySelectorAll('.tasks .startButton');
  startButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      if(!timer){
        const id = button.getAttribute('data-id');     


      }
    });

  });
}
