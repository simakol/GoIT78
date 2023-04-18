/* <div>
DIV
<p>
    P
    <span>
        SPAN
    </span>
</p>
</div> */

// const allElements = document.querySelectorAll("*");

// for (const elem of allElements) {
//   elem.addEventListener(
//     "click",
//     () => alert(`Занурення: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("click", () => alert(`Сплиття: ${elem.tagName}`));
// }

// document.body.addEventListener("click", (e) => {
//   console.log(
//     `Target: ${e.target.tagName} | current target: ${e.currentTarget.tagName}`
//   );
// });

//! target - елемент, на якому відбулася подія
//! currentTarget - елемент, на якому висить обробник(хто оброблює подію)

//! ===================================================

// Створити калькулятор вартості продукту взалежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

const refs = {
  form: document.getElementById("form"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
refs.amount.textContent = data.quantity;

refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  const { value } = target;
  // target - елемент, на якому відбувається подія, value - значення input'а поточного поля

  if (target === refs.quantity) {
    refs.amount.textContent = value;
  }

  target.setAttribute("value", value);
  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayTotal() {
  refs.total.textContent = data.calcTotalPrice() + " грн";
}

// const obj = {
//   name: "Alex",
//   greetings() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// obj.greetings();

// function main(callback) {
//   console.log("I am the main func");
//   callback();
// }

// main(obj.greetings.bind(obj));
