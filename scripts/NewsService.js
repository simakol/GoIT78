const URL = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

export default class NewsService {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }

  getNews() {
    return fetch(
      `${URL}?apiKey=${API_KEY}&q=${this.searchQuery}&searchIn=title&pageSize=6&page=${this.page}`
    )
      .then((res) => res.json())
      .then((data) => {
        // if (data.status === "error") throw new Error("The end");
        this.incrementPage();
        return data.articles;
      });
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
