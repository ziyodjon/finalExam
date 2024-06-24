import "./style.css";
import ClientListBox from "./components/ClientListBox.js";
//import { Button } from "./components";

const root = document.getElementById("app");
root.classList.add("container");

// const fakeData = [
//   {
//     name: "Shahzod",
//     surname: "Daminov",
//     lastName: "Shuvkatovich",
//     contacts: {
//       phone: "79063224411",
//       email: "shahzod@mail.ru",
//       telegram: "@testuser",
//     },
//   },
//   {
//     name: "Shuhrat",
//     surname: "Daminov",
//     lastName: "Shuvkatovich",
//     contacts: {
//       phone: "79063224422",
//       email: "shuhrat@mail.ru",
//       telegram: "@testuser",
//     },
//   },
//   {
//     name: "Shuvkat",
//     surname: "Daminov",
//     lastName: "Shuvkatovich",
//     contacts: {
//       phone: "79063224433",
//       email: "shuvkat@mail.ru",
//       telegram: "@testuser",
//     },
//   },
// ];
async function getData(url = "") {
  // Отправка GET-запроса
  const response = await fetch(url);

  // Ожидание ответа от сервера и преобразование его в JSON
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
}

const url = "http://localhost:3000/api/clients";

const allData = await getData(url);
console.log(allData);

const clientsCaptionsBox = document.createElement("div");
clientsCaptionsBox.classList.add(
  "clients-captions",
  "grid",
  "grid-cols-4",
  "mb-5",
  "mt-5"
);

const clientFioTitle = document.createElement("h6");
clientFioTitle.classList.add("px-10");
clientFioTitle.textContent = "ФИО";
const clientCreatedDateTitle = document.createElement("h6");
clientCreatedDateTitle.textContent = "Дата создания";
//clientCreatedDateTitle.classList.add("w-1/3");
const clientContactsTitle = document.createElement("h6");
//clientContactsTitle.classList.add("w-1/3");
clientContactsTitle.textContent = "Контакты";

clientsCaptionsBox.append(
  clientFioTitle,
  clientCreatedDateTitle,
  clientContactsTitle
);

const clientsListBoxes = allData.map((data) => ClientListBox(data));

root.append(clientsCaptionsBox, ...clientsListBoxes);

// HTMLElement.prototype.add = function (children = []) {
//   children.forEach((child) => this.appendChild(child));
// };

// root.add([
//   Button("Send data", "success", { onclick: () => console.log("Clicked") }),
//   Button("Send data", "error", { onclick: () => console.log("Clicked") }),
// ]);

// Данные, которые вы хотите отправить на сервер
// const data = {
//   name: "Sherozjon2",
//   surname: "Karimov",
//   lastName: "Shavkatovich",
//   contacts: [
//     {
//       type: "phone",
//       value: "79064445577",
//     },
//   ],
// };

// URL вашего API, куда вы хотите отправить данные
//const url = "http://localhost:3000/api/clients ";

// Функция для отправки данных
// async function postData(url = "", data = {}) {
//   // Параметры запроса
//   const response = await fetch(url, {
//     method: "POST", // Метод запроса
//     headers: {
//       "Content-Type": "application/json", // Заголовок для указания типа контента
//     },
//     body: JSON.stringify(data), // Преобразование данных в JSON-строку
//   });

//   // Ожидание ответа от сервера
//   return response.json(); // Преобразование ответа в JSON
// }

// Вызов функции и обработка ответа
// postData(url, data)
//   .then((response) => {
//     console.log("Success:", response); // Обработка успешного ответа
//   })
//   .catch((error) => {
//     console.error("Error:", error); // Обработка ошибок
//   });
