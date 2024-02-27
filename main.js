const tasks = []; //almaceno en el array cada una de las tareas
let time = 0; //tiempo que me va a llevar la cuenta regresiva
let timer = null;
let timerBreak = null; // break de los 5 minutos de descanso
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const taskName = document.querySelector("#time #taskName");

renderTime();
renderTasks();

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
    title: value,
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
      <div class = "completed">${
        task.completed
          ? `<span class ="done">Done</span>`
          : `<button class ="start-button" data-id ="${task.id}">Start</button>`
      }</div>
      <div class="title">${task.title}</div>
      
      </div>    
    `;
  });
  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.innerHTML = html.join("");

  const startButtons = document.querySelectorAll(".task .start-button");
  startButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!timer) {
        const id = button.getAttribute("data-id");
        startButtonHandler(id);
        button.textContent = "In progress..";
      }
    });
  });
}

function startButtonHandler(id) {
  time = 5;
  current = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  taskName.textContent = tasks[taskIndex].title;
  renderTime();

  timer = setInterval(() => {
    //funcion indefinida, hasta que yo la detenga. En cambio setTimeout se ejecuta despues de un periodo de tiempo
    timerHandler(id);
  }, 1000);
}
function timerHandler(id) {
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timer); //detenemos el setInterval
    markCompleted(id);
    timer = null;
    renderTasks();
    startBreak();
  }
}
function startBreak() {
  time = 3;
  taskName.textContent = "Break";
  renderTime();
  timerBreak = setInterval(() => {
    timerBreakHandler();
  }, 1000);
}

function timerBreakHandler() {
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timerBreak); //detenemos el setInterval
    current = null;
    timerBreak = null;
    taskName.textContent = "";
    renderTasks();
  }
}

function renderTime() {
  //me permite darle funcion a un numero
  const timeDiv = document.querySelector("#time #value");
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);

  //le damos el formato:
  timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
function markCompleted(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].completed = true;
}
