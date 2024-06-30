export async function request(path = "") {
  // Отправка GET-запроса
  const response = await fetch(`http://localhost:3000/api/${path}`);

  // Ожидание ответа от сервера и преобразование его в JSON
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
}

export async function getDataById(id = "") {
  // Отправка GET-запроса
  const response = await fetch(`http://localhost:3000/api/clients/${id}`);

  // Ожидание ответа от сервера и преобразование его в JSON
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
}
