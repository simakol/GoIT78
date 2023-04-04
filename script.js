// let age = 100;

// if (age < 18) {
//   console.log("Немає доступу");
// } else if (age === 20) {
//   console.log("some msg");
// } else {
//   console.log("Раді вас бачити");
// }

// age < 18 ? console.log("Немає доступу") : console.log("Раді вас бачити");

// function findGreaterOrEqual(a, b) {
//   return a === b
//     ? "a and b are equal"
//     : a > b
//     ? "a is greater"
//     : "b is greater";
// }

// if (a === b) {
//   console.log("a and b are equal");
// } else {
//   if (a > b) {
//     console.log("a is greater");
//   } else {
//     console.log("b is greater");
//   }
// }

// console.log(findGreaterOrEqual(3, 3));

// const saleHotdogs = (n) => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

// if (n < 5) {
//   console.log(100);
// } else {
//   if (n < 10) {
//     console.log(95);
//   } else {
//     console.log(90);
//   }
// }

// console.log(saleHotdogs(5));

// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// function collapseArrays(arr1, arr2) {
//   const biggestArray = arr1.length > arr2.length ? [...arr1] : [...arr2];
//   const smallestArray = arr1.length > arr2.length ? [...arr2] : [...arr1];

//   return biggestArray.map((el, i) => smallestArray[i] !== undefined ? el + smallestArray[i] : el)
// }

// console.log(collapseArrays(arr1, arr2)); // [5,7,9,4,5]

// Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.

// const arr = [1, 6, 5, 2, 7, 4, 5, 1, 4, 3, 9, 8, 11, 10, 18];

// function removeDuplicateArrays(arr) {
//   return arr.filter(
//     (item, index) =>
//       index ===
//       arr.findIndex((elem) => JSON.stringify(elem) === JSON.stringify(item))
//   );
// }

// function findCouple(array, number) {
//   const pairs = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let k = i + 1; k < arr.length; k += 1) {
//       const firstNum = array[i];
//       const secondNum = array[k];
//       if (firstNum + secondNum === number) pairs.push([firstNum, secondNum]);
//     }
//   }

//   return removeDuplicateArrays(pairs);
// }

// console.log(findCouple(arr, 5));

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// console.log(convertToInteger("10011")); //19

// const arr = [1, 2, 3];

// for (const i in arr) {
//   console.log(i);
// }

// for (const el of arr) {
//   console.log(el);
// }

// //function declaration
// function boo() {}

// //function expression + anonymous
// const foo = function () {};

// //arrow functions
// const doo = () => {};

// //IINF
// (function () {})();

// const user = {
//   name: "Oleg",
//   age: 45,
// };

// console.log(Object.keys(user));

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

/*
1.
(course = математика, index = 0, array) => array.indexOf(course) === index | 0 === 0 -> true [математика]
3.(course = информатика, index = 2, array) => array.indexOf(course) === index | 2 === 2 -> true [математика, физика, информатика]
4. (course = математика, index = 3, array) => array.indexOf(course) === index | 0 === 3 -> false [математика, физика, информатика]
*/

// // (ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ - тут потрібен лише if, але так в одну строку)

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) =>
//     secondArray.includes(element) ? commonElements.push(element) : 0
//   );

//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]

// function foo() {
//   console.log(this);
// }

// foo();

// const obj = {
//   a: 1,
//   boo() {
//     console.log(this)
//     foo();
//   },
// };

// obj.boo();
