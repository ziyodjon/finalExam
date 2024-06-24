import "./style.css";
import ClientListBox from "./components/ClientListBox.js";
//import { Button } from "./components";

const root = document.getElementById("app");
root.classList.add("container");

const fakeData = [
  {
    name: "Shahzod",
    surname: "Daminov",
    lastName: "Shuvkatovich",
    contacts: {
      phone: "79063224411",
      email: "shahzod@mail.ru",
      telegram: "@testuser",
    },
  },
  {
    name: "Shuhrat",
    surname: "Daminov",
    lastName: "Shuvkatovich",
    contacts: {
      phone: "79063224422",
      email: "shuhrat@mail.ru",
      telegram: "@testuser",
    },
  },
  {
    name: "Shuvkat",
    surname: "Daminov",
    lastName: "Shuvkatovich",
    contacts: {
      phone: "79063224433",
      email: "shuvkat@mail.ru",
      telegram: "@testuser",
    },
  },
];

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

const clientsListBoxes = fakeData.map((data) => ClientListBox(data));

root.append(clientsCaptionsBox, ...clientsListBoxes);

// HTMLElement.prototype.add = function (children = []) {
//   children.forEach((child) => this.appendChild(child));
// };

// root.add([
//   Button("Send data", "success", { onclick: () => console.log("Clicked") }),
//   Button("Send data", "error", { onclick: () => console.log("Clicked") }),
// ]);
