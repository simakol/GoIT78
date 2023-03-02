//* Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// if (userAnswer === "ECMAScript") alert("Правильно!");
// else alert("Не знаєте? ECMAScript!");

// умова ? тіло_1, тобто якщо умова === тру : тіло_2, якщо умова === фолз

// userAnswer === "ECMAScript"
//   ? alert("Правильно!")
//   : alert("Не знаєте? ECMAScript!");

// let msg = "";

// userAnswer === "ECMAScript"
//   ? (msg = "Правильно!")
//   : (msg = "Не знаєте? ECMAScript!");

// alert(msg);

// let msg = userAnswer === "ECMAScript" ? "Правильно!" : "Не знаєте? ECMAScript!";

// alert(msg);

//! ==========================================

//* Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 0;
// let timeStr = "";

// if (minutes === 0) timeStr = `${hours} г.`;
// else timeStr = `${hours} г. ${minutes} хв.`;

// console.log(timeStr);

// const hours = 14;
// const minutes = 10;
// let timeStr = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;

// console.log(timeStr);

//! ==========================================

//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   //   if (a > b) console.log(a);
//   //   else console.log(b);

//   //   a > b ? console.log(a) : console.log(b);

//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// let result = a > 100 && b > 100 ? (a > b ? a : b) : b + 512;

// console.log(result);

//! ==========================================

//* Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log("Сьогодні");
//     break;
//   }
//   case 1: {
//     console.log("Завтра");
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }
//   default: {
//     console.log("Дата у майбутньому");
//   }
// }

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

//! ==========================================

//* Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   total += i;
// }

// console.log(total);

/*
1. 
for (let i = 20; i <= 100; i += 1) { // i = 20, total = 0
  total += i; // total = 20
}
2. 
for (let i = 20; i <= 100; i += 1) { // i = 21, total = 20
  total += i; // total = 41 -> 20 + 21
}
2. 
for (let i = 20; i <= 100; i += 1) { // i = 22, total = 41
  total += i; // total = 63 -> 22 + 41
}

*/

// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for(let i = min; i <= max; i += 5) {
//     console.log(i)
// }

// for(let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }

/*
1. 
for(let i = 0; 0 < 10; i += 1) {
    console.log(0)
}

2. 
for(; 1 < 10; i += 1) {
    console.log(1)
}

3. 
for(; 2 < 10; i += 1) {
    console.log(2)
}

9. 
for(; 9 < 10; i += 1) {
    console.log(9)
}

10. 
for(; 10 < 10; i += 1) {
   --------
}



*/

//! ==========================================

//* Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt("Введіть Логін: ")?.trim();

// console.log(login);

// if (login === "Адмін") {
//   const password = prompt("Введіть пароль: ");
//   if (password === "Я адмін") console.log("Здрастуйте!");
//   else console.log("Невірний пароль");
// } else if (!login) {
//   // !"" -> !false -> true | !undefined -> !false -> true | !"asdfaf" -> !true -> false
//   // else if (login === "" || login === undefined)
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

// alert("hey");
console.log("hey");
