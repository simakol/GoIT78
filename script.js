//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     // const currentStone = this.stones.find(({ name }) => name === stoneName);
//     // // const currentStone = this.stones.find((stone) => stone.name === stoneName)
//     // return currentStone.price * currentStone.quantity

//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//! ================================================

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       showCtx() {
//         console.log(this);
//       },
//     };
//     newContact.showCtx();
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);

//! ================================================

//*  Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

//* read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.

//* add() - повертає суму збережених значень.

//* mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   read(a = 0, b = 0) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(1, 4);
// console.log(calculator);
// console.log(calculator.add()); // 8
// console.log(calculator.mult()); // 15

//! ================================================

/*
- this in arrow func
- this in normal func
- call/apply and bind
*/

//! ====

// function boo() {
//   console.log(this);
// }

// function foo() {
//   boo();
//   console.log(this);
// }

// foo();

//! ====

// this посилається на обʼєкт, який викликає сам метод

// const user = {
//   username: "Alex",
//   sayHi() {
//     console.log(`Hello everyone! My name is ${this.username}`);
//   },
// };

// const user2 = {
//   username: "Olga",
//   foo: user.sayHi,
// };

// user2.foo()

//! ====

// function boo() {
//   console.log(this);
// }

// const user = {
//   username: "Alex",
//   sayHi() {
//     // const foo = () => console.log(this);
//     // foo.call({ username: "Lena" })
//     // const fooCopy = foo.bind({ username: "Lena" })
//     // fooCopy()
//     // boo();
//     console.log(`Hello everyone! My name is ${this.username}`);
//   },
// };

// user.sayHi()

// boo.call({ username: "Lena" });

//! ====

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
//   // console.log(`Обробляємо заявку від ${callback.call(customer)}.`);
// }

// makeMessage(customer.getFullName.bind(customer));
// makeMessage(customer.getFullName);

// під час передачі ф-ції(або методу) в якості колбек ф-ції ми втрачаємо контекст. Це відбувається тому що контекст ф-ції визначається на момент її виклику, а оскільки під час передачі колбек ф-ції ми її не викликаємо(бо треба передати посилання, а не результат), то і сама ф-ція не розуміє що буде її контекстом

// якщо ф-ція викликається без контексту - її контекстом буде Window, а у 'use strict' - undefined

//! ====

// const user = {
//   username: "alex",
//   sayHi(){
//     //code
//   },
//   greetings: function(){
//     //code
//   }
// }

//! ====

// let text = "1483" // 8

// text = text.padStart(8, "0")

// console.log(text)

//! ====

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
// відповідь :
// function descendingOrder(n) {
//   return +n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }

// console.log(descendingOrder(145263));
// console.log(descendingOrder("123456789"));
// можете пояснити +n.toString() оцей початок навіщо там + , і стрінг
