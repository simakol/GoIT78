//* Example 1 - Базові операції з масивом

// Створіть масив genres з елементами «Jazz» та «Blues».
//1. Додайте «Рок-н-рол» до кінця.
//2. Виведіть у консоль перший елемент масиву.
//3. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
//4. Видаліть перший елемент та виведіть його в консоль.
//5. Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];

// genres.push("Рок-н-рол");

// console.table(genres);

// console.log(genres[0]);

// console.log(genres.length);
// console.log(genres[genres.length - 1]);
// // console.log(genres.shift())
// console.log(genres.splice(0, 1)[0]);

// // genres.unshift("Country", "Reggae");
// genres.splice(0, 0, "Country", "Reggae");

//! ================================================

//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "8 3";
// const valuesArray = values.split(" ");
// const a = Number(valuesArray[0]);
// const b = Number(valuesArray[1]);
// const square = a * b;
// console.log(square);

//! ================================================

//* Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

/*
1: 🍎
2: 🍇
3: 🍑
*/

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) { // перебирає значення
//   console.log(fruit);
// }

// for (const i in fruits) {
//   // перебирає індекси (i - завжди строка)
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }

//! ================================================

//* Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome to the future"; // to the
/*
1. переводимо рядок у масив з розділенням " "
2. видалити перший елемент масиву і останній
3. перевести масив назад до строки з розділенням " "
*/

// const strArray = string.split(" ");
// strArray.shift();
// strArray.pop();
// const newString = strArray.join(" ");

// console.log(newString);

//! ================================================

//* Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";
// const reversedStr = string.split("").reverse().join("");
// console.log(reversedStr);

/*
1. створення масиву, який буде зберігати результат і накопичувати значення
2. зробити із строки масив і перебрати його задом наперед
3. пушити в масив результату поточний символ
4. робимо із масиву результату звичайну строку
*/

// let newString = [];
// const stringArray = string.split("");

// for (let i = stringArray.length - 1; i >= 0; i -= 1) {
//   newString.push(stringArray[i]);
// }

// newString = newString.join("");

// console.log(newString);

/*
emocleW

1. e -> push(e) -> [e]
2. m -> push(m) -> [e, m]
3. o -> push(o) -> [e, m, o]

*/

//! ================================================

//* Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// let temp = langs[1];
// langs[1] = langs[2];
// langs[2] = temp;

// console.log(langs);

/*
1. запустити цикл, який буде проходитись по всім елементам(по індексам)
2. запутити вкладений цикл, який буде починатись з індексу на один більше від i
3. порівнюємо перші букви сусідніх елементів
    3.1. якщо буква зліва більша за букву справа, то міняємо елементи місцями
*/
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// for (let i = 0; i < langs.length - 1; i += 1) {
//   //   console.log(`El: ${langs[i]} | i: ${i}`);
//   for (let j = i + 1; j < langs.length; j += 1) {
//     // console.log(`\tEl: ${langs[j]} | j: ${j}`);
//     if (langs[i][0] > langs[j][0]) {
//       // langs[i][0] -> "python"[0] -> "p"
//       // langs[j][0] -> "javascript"[0] -> "j"
//       // "p" > "j"
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
//   //   console.log("\n");
// }

// console.log(langs);

// console.log(langs.sort());

//! ================================================

//* Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const num of numbers) {
//   if (num < min) min = num;
// }

// console.log(min);
