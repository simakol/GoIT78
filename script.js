// let a = 5; //number
// let b = "5"; //string

// console.log(a == b) // не строге порівняння
// порівняння з приведенням типів
/*
5 == "5" -> "5" == "5" -> true
*/

// console.log(a === b) //строге порівняння, порівняння без приведення типів

/*
number === string -> false
*/

// Fira code
// cold horizon

//! ===================================

//* Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

//! ===================================

//* Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 70;
// console.log(students);

//! ===================================

//* Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// 108 + 223 - 10
// 331 - 10
// 321

//! ===================================

//* Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.1;

// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))
// < .5 floor | >= .5 ceil

//! ===================================

//* Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//! ===================================

//* Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// console.log(weight);
// console.log(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8

//! ===================================

//* Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log("2" > "12"); // true - Unicode table

// console.log("0".charCodeAt(0));
// console.log("2".charCodeAt(0));

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); // 0 == 0 -> true

/*
    false: 0, "", null, undefind
    true: будь-яке число, крім 0, будь-яка строка, яка не є пустою
*/

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false

//! ===================================

// '0' == false ->
//  1. Number("0") -> 0
//  2. Number(false) -> 0
//  3. 0 == 0 -> true
// Чому тут тру, якщо строка не пуста і це true
// Чому переводить до числа, а не true == false

//* Example 8 - Логічні оператори
// Яким буде результат виразів?

// && - повертає перший false, якщо не знаходить, повертає останній елемент
// || - повертає перший true, якщо не знаходить, повертає останній елемент
// ! - змінює логічний тип на зворотній(false на true і навпаки)

// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //kiwi

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0);
// 1. -> null
// 2. null > 0
// 3. Number(null) -> 0
// 4. 0 > 0 -> false


// null > 0 -> 0 > 0 -> false

console.log(null || (2 && 3) || 4); // 3

// 1. (2 && 3) -> 3
// 2. null || 3 || 4 -> 3

// 2 && 3 -> 3
// null || 3 || 4 -> 3

//! ===================================

// '5' === 5 -> false string === number

// '5' == 5 -> Number('5') -> 5 == 5 -> true

// Number('null') -> NaN