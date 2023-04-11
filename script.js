//* Створити список технологій що вивчаються на курсі Fullstack за допомогою js | Показати як це робиться через map та reduce

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

//  createElement
/*
 1. Створити контейнер ul
 2. Перебір масиву технологій
    2.1. Створювати li
    2.2. Записати текст у створений елемент li
    2.3. Помістити li у кінець ul
 3. Помістити ul на сторінку
*/

// const ulEl = document.createElement("UL");

// for (const technology of technologies) {
//   const liEl = document.createElement("LI");
//   liEl.textContent = technology;
//   ulEl.appendChild(liEl);
// }

// document.body.prepend(ulEl);

//!=====
// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");
// const list = `<ul>${listContent}</ul>`;

// document.body.insertAdjacentHTML("afterbegin", list);

//!=====

// const listContent = technologies.reduce(
//   (markup, technology) => markup + `<li>${technology}</li>`,
//   ""
// );

// const list = `<ul>${listContent}</ul>`;

// document.body.insertAdjacentHTML("afterbegin", list);

//!================================================

//* Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const btnsContainer = document.getElementById("btnsContainer");
// const fragment = document.createDocumentFragment();

// colors.forEach(({ label, color }) => {
//   const button = document.createElement("button");
//   button.type = "button";
//   button.textContent = label;
//   button.style.backgroundColor = color;
//   button.classList.add("btn");
//   fragment.appendChild(button);
// });

// btnsContainer.appendChild(fragment);

//!================================================
