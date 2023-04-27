import refs from "./refs.js";
import { load, save } from "./storage.js";

const STORAGE_KEY = "tasks";
let currentID = 1;

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
  createLi({
    text: value,
  });

  addTaskToStorage(value);
  clearInput();
}

function createLi({ text, isDone = false, id = currentID }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.className = "checked";
  addCloseButton(liEl);
  refs.myUL.appendChild(liEl);
}

function handleTaskBehaviour({ target }) {
  const currentState = load(STORAGE_KEY);

  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
    const taskObj = currentState.find(
      (task) => Number(task.id) === Number(target.dataset.id)
    );
    taskObj.isDone = !taskObj.isDone;
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      (task) => Number(task.id) === Number(target.parentNode.dataset.id)
    );
    currentState.splice(taskIndex, 1);
  }

  save(STORAGE_KEY, currentState);
}

function createTaskObject({ text, isDone = false }) {
  return {
    text,
    isDone,
    id: currentID,
  };
}

function addTaskToStorage(text) {
  const currentState = load(STORAGE_KEY);
  if (currentState === undefined) {
    save(STORAGE_KEY, [createTaskObject({ text })]);
  } else {
    currentState.push(createTaskObject({ text }));
    save(STORAGE_KEY, currentState);
  }
  currentID += 1;
}

function fillTasksList() {
  const currentState = load(STORAGE_KEY);
  if (currentState !== undefined) {
    currentState.forEach(createLi);
    currentID =
      currentState.length === 0
        ? 1
        : currentState[currentState.length - 1].id + 1;
  }
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
