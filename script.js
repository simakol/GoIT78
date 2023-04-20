// const refs = {
//   otuputScrollStandart: document.getElementById("otuputScrollStandart"),
//   otuputScrollThrottled: document.getElementById("otuputScrollThrottled"),
//   otuputResizeStandart: document.getElementById("otuputResizeStandart"),
//   otuputResizeThrottled: document.getElementById("otuputResizeThrottled"),
// };

// const eventScrollCounter = {
//   standart: 0,
//   throttle: 0,
// };

// const eventResizeCounter = {
//   standart: 0,
//   throttle: 0,
// };

// document.addEventListener("scroll", () => {
//   eventScrollCounter.standart += 1;
//   refs.otuputScrollStandart.textContent = eventScrollCounter.standart;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(
//     () => {
//       eventScrollCounter.throttle += 1;
//       refs.otuputScrollThrottled.textContent = eventScrollCounter.throttle;
//     },
//     3000,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );

// window.addEventListener("resize", () => {
//   eventResizeCounter.standart += 1;
//   refs.otuputResizeStandart.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttle += 1;
//     refs.otuputResizeThrottled.textContent = eventResizeCounter.throttle;
//   }, 3000)
// );

//! ===================================

// const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener(
//   "input",
//   _.debounce(
//     (event) => {
//       console.log(event.target.value);
//     },
//     1000,
//     {
//       leading: true,
//       trailing: true,
//     }
//   )
// );

//! ===================================

const signInForm = document.getElementById("signInForm");

const classes = {
  wrong: "wrong",
  correct: "correct",
};

signInForm.addEventListener(
  "input",
  _.debounce(({ target }) => {
    const { value } = target;
    console.log(target.dataset);
    if (
      value.length < target.dataset.minLength ||
      value.length > target.dataset.maxLength
    ) {
      target.classList.add(classes.wrong);
      target.classList.remove(classes.correct);
    } else {
      target.classList.add(classes.correct);
      target.classList.remove(classes.wrong);
    }
  }, 1000)
);
