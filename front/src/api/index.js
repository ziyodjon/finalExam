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

// Функция для отправки данных
export async function saveData(url = "", data = {}, onSuccess) {
  // Параметры запроса
  const response = await fetch(url, {
    method: "POST", // Метод запроса
    headers: {
      "Content-Type": "application/json", // Заголовок для указания типа контента
    },
    body: JSON.stringify(data), // Преобразование данных в JSON-строку
  });
  onSuccess ?.();
  // Ожидание ответа от сервера
  return response.json(); // Преобразование ответа в JSON
}


// Update data
export async function updateData(url, data, onSuccess) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Data updated successfully:", result);
    onSuccess();
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

export async function deleteData(url, onSuccess) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    onSuccess ?.();
    console.log("Data deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}