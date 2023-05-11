const URL = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

function getNews(query, page = 1) {
  return fetch(`${URL}?apiKey=${API_KEY}&q=${query}&searchIn=title&pageSize=6&page=${page}`).then(
    (res) => res.json()
  );
}

export default { getNews };
