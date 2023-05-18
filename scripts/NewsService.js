const URL = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

export default class NewsService {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }
  /*
  1. await можна використовувати тільки всередині async функцій
  2. асинхронна ф-ція завжди повертає Promise
  3. await заморожує виконання функції до тих пір, поки проміс не перейде в стан fullfilled або у стан Rejected
  4. await повертає дані з промісу
  5. async/await потрібні для імітації синхронного коду усередині асинхронного
*/
  async getNews() {
    //* axios await
    const { data } = await axios.get(
      `${URL}?apiKey=${API_KEY}&q=${this.searchQuery}&searchIn=title&pageSize=6&page=${this.page}`
    );
    this.incrementPage();
    return data.articles;

    //* axios then
    // return axios
    //   .get(
    //     `${URL}?apiKey=${API_KEY}&q=${this.searchQuery}&searchIn=title&pageSize=6&page=${this.page}`
    //   )
    //   .then(({ data }) => {
    //     this.incrementPage();
    //     return data.articles;
    //   });

    //* fetch then

    // return fetch(
    //   `${URL}?apiKey=${API_KEY}&q=${this.searchQuery}&searchIn=title&pageSize=6&page=${this.page}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // if (data.status === "error") throw new Error("The end");
    //     this.incrementPage();
    //     return data.articles;
    //   });
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
