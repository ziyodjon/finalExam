import "../css/style.css";
import ClientListBox from "../../components/ClientListBox.js";
import CreateModalWindow from "../../components/CreateModalWindow.js";
import { create, renderData } from "../../utils/index.js";
import { Button } from "../../components/Button.js";
import { request } from "../../api/index.js";

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

// const clientsListBoxes = allData.map((data) => ClientListBox(data));
const clientsListBoxes = allData.map((data) => ClientListBox(data));

// console.log(clientsListBoxes);

clientsListWrap.append(...clientsListBoxes);
//renderData();

app.append(clientsCaptionsBox, clientsListWrap, footer);

export default app;
