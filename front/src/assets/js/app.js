import "../css/style.css";
import ClientListBox from "../../components/ClientListBox.js";
import CreateModalWindow from "../../components/CreateModalWindow.js";
import { create, sortDates, sortNames } from "../../utils/index.js";
import { Button } from "../../components/Button.js";
import { request } from "../../api/index.js";
import { myToggle } from "../../utils/index.js";

const app = create("div");
const clientsListWrap = create("div", { className: "clients-list-wrap" });

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
const clientFioIconArea = create("span", { className: "fio-icon-area" });
const clientFioTitle = Button("ФИО", null, {
  onclick: (e) => {
    const toggle = myToggle();
    sortNames(allData, toggle);
  },
  className: "client-names-caption px-10",
});
clientFioTitle.append(clientFioIconArea);

const clientCreatedDateIconArea = create("span", {
  className: "date-icon-area",
});
const clientCreatedDateTitle = Button("Дата создания", null, {
  onclick: (e) => {
    const toggle = myToggle();
    sortDates(allData, toggle);
  },
  className: "px-10",
});
clientCreatedDateTitle.append(clientCreatedDateIconArea);

const clientContactsTitle = create("div", {
  className: "px-10 py-2",
  content: "Контакты",
});

clientsCaptionsBox.append(
  clientFioTitle,
  clientCreatedDateTitle,
  clientContactsTitle
);

// const clientsListBoxes = allData.map((data) => ClientListBox(data));
const clientsListBoxes = allData.map((data) => ClientListBox(data));

// console.log(clientsListBoxes);

clientsListWrap.append(...clientsListBoxes);
//renderData();

app.append(clientsCaptionsBox, clientsListWrap, footer);

export default app;

// const simpleButton = Button("Simple button", "success", {
//   onclick: () => {
//     const tog = myToggle();
//     const res = sortNames(allData, null, tog);
//     console.log(res);
//   },
//   className: "text-white py-2 px-20 hover:bg-[#157739]",
// });

// document.body.prepend(simpleButton);
