const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map(({ model }) => model);

// function getModels(cars) {
//   return cars.map(function ({ model }) {
//     return model;
//   });
// }

// console.table(getModels(cars));

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);
// /*
// cars.filter((car) => car.price <= threshold);
// */

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 23000));

//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);
// // onSale === true

// console.table(getCarsWithDiscount(cars));

//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// console.table(getCarsWithType(cars, "truck"));

//* Example 6 - Метод find

// const getCarByModel = (cars, model) =>
//   cars.find(({ model: carModel }) => model === carModel);
// // (car) => car.model === model

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//! === SORT ===

// const arr = [1, 5, 14, 32, 2, 34, 3, 54, 21, 3];

// arr.sort((a, b) => a - b); // за зростанням
// arr.sort((a, b) => b - a); // за спаданням

// console.log(arr);

//! =====

// const arr = ["b", "r", "s", "a", "c"];

// arr.sort((a, b) => a.localeCompare(b)); // за зростанням
// arr.sort((a, b) => b.localeCompare(a)); // за спаданням

// console.log(arr);

//! =====

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.model.localeCompare(b.model);
//       case "desc":
//         return b.model.localeCompare(a.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

/*
1. (acc = 0, { amount = 14 }) => acc + amount | 0 + 14 = 14
2. (acc = 14, { amount = 2 }) => acc + amount | 14 + 2 = 16
3. (acc = 16, { amount = 8 }) => acc + amount | 16 + 8 = 24
*/

/*
2. (acc = obj, { amount = 2 }) => acc + amount | obj + 2
3. (acc = obj2, { amount =82 }) => acc + amount | obj2 + 8 = obj28
*/

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) => cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

//! ===============

// const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// const uniqueNumbers = numbers.filter(
//   (number, index, numbers) => numbers.indexOf(number) === index
// );
// console.log(uniqueNumbers);

// console.log(new Set(numbers));

/*
1. numbers.filter(
  (number = 1, index = 0, numbers) => numbers.indexOf(number = 1)  === index | 0 === 0 -> true
);
2. numbers.filter(
  (number = 1, index = 1, numbers) => numbers.indexOf(number = 1)  === index | 0 === 1 -> false
);
3. numbers.filter(
  (number = 2, index = 2, numbers) => numbers.indexOf(number = 2)  === index | 2 === 2 -> true
);
4. numbers.filter(
  (number = 2, index = 3, numbers) => numbers.indexOf(number = 2)  === index | 2 === 3 -> false

  [1, 2]
);




*/

//! ===============

// const subjects = ["Math", "PE", "Chemistry", "Physics"];

// const index = subjects.findIndex((subject) => subject === "Physics");
// console.log(index);

// const arr = [3, 4, 2, 1, 35, 3, 2, 1, 9, 3, 2];

// const i = arr.findIndex((el) => el > 40);

// console.log(i);
// console.log(arr[i]);

//! ===============

// (function (msg) {
//   console.log(msg);
// })("hello world!");
