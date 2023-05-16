const URL = "https://6463b550127ad0b8f88f6592.mockapi.io/api/todos";

/*
1. POST - створення нового ресурсу (обʼєкт тудушки) | після натискання на кнопку едд
2. GET - забираємо масив обʼєктів туду з серверу (підвантаження після перезавантаження сторінки)
3. DELETE - видаляємо тудушку при натисканні на крестик
4. PUT - змінювати статус isDone при натисканні на тудушку
*/

function createTask(value) {
  //   return fetch(URL, {
  //     method: "POST",
  //     body: JSON.stringify(value),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  return axios.post(URL, value);
}

function getTasks() {
  //   return fetch(URL).then((res) => res.json());
  return axios.get(URL).then(({ data }) => data);
}
/*
res - Response { body: data.json } - js obj -> res.json() -> JSON.parse(res.body)
*/

function deleteTask(id) {
  //   return fetch(`${URL}/${id}`, {
  //     method: "DELETE",
  //   });

  return axios.delete(`${URL}/${id}`);
}

function updateTask(id, status) {
  //   return fetch(`${URL}/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ isDone: status }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  return axios.put(`${URL}/${id}`, { isDone: status });
}

export { createTask, getTasks, updateTask, deleteTask };
