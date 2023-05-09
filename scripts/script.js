import API from "./api.js";

/*
 1. отримати refs
 2. вішаємо слухач подій на сабміт на форму
 3. отримати запит з інпуту і передати його у вигляді квері параметру на сервер
 4. перевірити відповідь серверу
    4.1. якщо негативна відповідь - інформувати користувача
 5. отримаємо результат та перебираємо масив новин і створюємо з нього розмітку(збираємо одну строку)
 6. показуємо користувачу розмітку (innerHTML)
 7. очистити форму
*/

const refs = {
  form: document.getElementById("form"),
  newsWrapper: document.getElementById("newsWrapper"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.news.value.trim();

  if (value === "") alert("No value!");
  else
    API.getNews(value)
      .then(({ articles }) => {
        if (articles.length === 0) throw new Error("No data");

        return articles.reduce(
          (markup, article) => markup + createMarkup(article),
          ""
        );
      })
      .then(updateNewsList)
      //   .then(data => console.log(data))
      .catch(onError)
      .finally(() => form.reset());
  //   .catch((err) => onError(err));
}

function createMarkup({ title, author, description, url, urlToImage }) {
  return `
  <div class="article-card">
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || "Unknown"}</h3>
    <img src=${
      urlToImage ||
      "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    } class="article-img" alt=${title}>
    <p class="article-description">${description}</p>
    <a href=${url} target="_blank" class="article-link">Read more</a>
  </div>`;
}

function updateNewsList(markup) {
  refs.newsWrapper.innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateNewsList("<p>Not found!</p>");
}
