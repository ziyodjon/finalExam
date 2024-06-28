import "../css/style.css";
import ClientListBox from "../../components/ClientListBox.js";
import CreateModalWindow from "../../components/CreateModalWindow.js";
import { create } from "../../utils/index.js";
import { Button } from "../../components/Button.js";
import { request } from "../../api/index.js";

const app = create("div");

const footer = create("div", { className: "footer flex justify-center my-10" });

const addClientBtn = Button("Добавить клиента", "success", {
  onclick: () => {
    const modal = CreateModalWindow(true);
    document.body.append(modal);
  },
  className: "text-white py-2 px-20 hover:bg-[#157739]",
});

footer.append(addClientBtn);

const allData = await request("clients");

const clientsCaptionsBox = document.createElement("div");
clientsCaptionsBox.classList.add(
  "clients-captions",
  "grid",
  "grid-cols-4",
  "mb-5",
  "mt-5"
);

const clientFioTitle = document.createElement("button");
clientFioTitle.classList.add("px-10");
clientFioTitle.textContent = "ФИО";

const clientCreatedDateTitle = document.createElement("button");
clientCreatedDateTitle.textContent = "Дата создания";

const clientContactsTitle = document.createElement("div");
clientContactsTitle.textContent = "Контакты";

clientsCaptionsBox.append(
  clientFioTitle,
  clientCreatedDateTitle,
  clientContactsTitle
);

const clientsListBoxes = allData.map((data) => ClientListBox(data));

app.append(clientsCaptionsBox, ...clientsListBoxes, footer);
export default app;

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

// const addContactBtn = document.querySelector(".addContactsBtn");
// addContactBtn.addEventListener("click", (e) => {
//   const addContactsItems = document.querySelectorAll(".addContactsItems");
//   const addContactsArea = document.querySelector(".addContactsArea");
//   const newEl = document.createElement("div");
//   newEl.innerHTML = `<div
//                 class="addContactsItems flex justify-between gap-1 my-[10px]"
//               >
//                 <select
//                   name="types"
//                   id=""
//                   class="bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[162px]"
//                 >
//                   <option value="phone">phone</option>
//                   <option value="email">email</option>
//                   <option value="telegram">telegram</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Выберите ответ"
//                   class="bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[268px]"
//                 />
//                 <button class="delContactItem">
//                   <i
//                     class="fa fa-trash-o text-[#484848] text-[20px]"
//                     aria-hidden="true"
//                   ></i>
//                 </button>
//               </div>`;
//   addContactsArea.append(newEl);
//   console.log(addContactsItems);
// });
