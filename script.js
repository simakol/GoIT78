// foo();

// function foo() {
//   //function declaration
//   console.log("foo");
// }

// foo();

// boo();

// //function expression
// const boo = function () {
//   console.log("boo");
// };

// boo();

//! ========================

// function foo() {
//   console.log(arguments);
//   console.log(Array.from(arguments));

//   const arr = [];
//   for (let i = 0; i < arguments.length; i += 1) {
//     arr[i] = arguments[i];
//   }
//   console.log(arr);
// }

// foo("sss", 5, false, null);

//! ========================

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   weight = convertToDecimal(weight);
//   height = convertToDecimal(height);

//   const result = weight / (height * height);

//   return getRoundedNumber(result);
// }

// function convertToDecimal(str) {
//   return Number(str.replace(",", "."));
// }

// function getRoundedNumber(num) {
//   return Math.round(num * 10) / 10;
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// const bmi2 = calcBMI("90,9", "1,50");
// console.log(bmi2);

//! ===========================

//* Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//   //   return Math.min(a, b);
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

//! ===========================

//* Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if (num > max) max = num;
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//! ===========================

//* Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   let sum = 0;
//   for (const num of arguments) {
//     sum += num;
//   }
//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//! ===========================

//* Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

//* addCourse(name) - додає курс до кінця колекції
//* removeCourse(name) - видаляє курс із колекції
//* updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   //   if (courses.includes(name)) {
//   //     console.log("Ви вже маєте такий курс");
//   //     return;
//   //   }
//   //   courses.push(name);
//   if (courses.includes(name)) console.log("Ви вже маєте такий курс");
//   else courses.push(name);
// }

// function removeCourse(name) {
//   const index = courses.indexOf(name);

//   if (index === -1) console.log("Курс із таким ім'ям не знайдено");
//   else courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);

//   if (index === -1) console.log("Курс із таким ім'ям не знайдено");
//   else if (courses.includes(newName)) console.log("Ви вже маєте такий курс");
//   else courses[index] = newName;
//   //   else courses.splice(index, 1, newName);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// updateCourse("HTML", "Next.js");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

//! ===========================

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   /*
//   multiply(1, 2, 3)
//   arguments = [1, 2, 3]

//   1. argument = 1
//     total = 1 * 1
//   2. argument = 2
//     total = 1 * 2 = 2
//   2. argument = 3
//     total = 2 * 3 = 6
//   */

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//! ===========================

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) continue;
//   console.log(i);
// }

//! ===========================


