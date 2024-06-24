import "./style.css";
//import { Button } from "./components";

const root = document.getElementById("app");
root.classList.add("container");

const clientsCaptions = document.createElement("div");
clientsCaptions.classList.add("clients-captions", "flex", "mb-5", "mt-5");

const clientFio = document.createElement("h6");
clientFio.classList.add("flex-1");
clientFio.textContent = "ФИО";
const clientCreatedDate = document.createElement("h6");
clientCreatedDate.textContent = "Дата создания";
clientCreatedDate.classList.add("flex-1");
const clientContacts = document.createElement("h6");
clientContacts.classList.add("flex-1");
clientContacts.textContent = "Контакты";

clientsCaptions.append(clientFio, clientCreatedDate, clientContacts);

const clientsLists = document.createElement("div");
clientsLists.textContent = "test";
clientsLists.classList.add(
  "bg-white",
  "rounded-full",
  "pt-1",
  "pl-5",
  "pr-5",
  "pb-1"
);

const clientFullName = document.createElement('div');
clientFullName.textContent = 'Александр Сергеевич Пушкин';

root.append(clientsCaptions, clientsLists);

// HTMLElement.prototype.add = function (children = []) {
//   children.forEach((child) => this.appendChild(child));
// };

// root.add([
//   Button("Send data", "success", { onclick: () => console.log("Clicked") }),
//   Button("Send data", "error", { onclick: () => console.log("Clicked") }),
// ]);
