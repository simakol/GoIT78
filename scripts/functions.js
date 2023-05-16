import refs from "./refs.js";
import { createTask, getTasks, updateTask, deleteTask } from "./api.js";

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function addNewTask() {
  const clearInput = () => (refs.myInput.value = "");

  const value = refs.myInput.value.trim();
  if (value === "") {
    alert("Потрібно ввести текст!");
    clearInput();
    return;
  }

  createTask({ text: value })
    .then(({ data }) => data)
    // .then((res) => res.json()) //fetch
    .then(createLi)
    .catch(onError);

  // .then(task => createLi(task));

  clearInput();
}

function createLi({ text, isDone, id }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.className = "checked";
  addCloseButton(liEl);
  refs.myUL.appendChild(liEl);
}

function handleTaskBehaviour({ target }) {
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
    updateTask(target.dataset.id, target.classList.contains("checked")).catch(
      onError
    );
  } else if (target.classList.contains("close")) {
    deleteTask(target.parentNode.dataset.id)
      .then(({ data }) => {
        target.parentNode.remove();
        return data;
      })
      .catch(onError);

    // .then((res) => {
    //   target.parentNode.remove();
    //   return res.json();
    // }); //fetch
  }
}

function fillTasksList() {
  // getTasks().then((tasks) => tasks.forEach((task) => createLi(task)));
  getTasks()
    .then((tasks) => tasks.forEach(createLi))
    .catch(onError);
}

function onError(err) {
  alert("Error: " + err.response.statusText);
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
