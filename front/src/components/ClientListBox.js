import CreateModalWindow from "./CreateModalWindow.js";
import { create, formatDate } from "../utils/index.js";
import { Button } from "./Button.js";
const types = {
  phone: "Телефон",
  email: "Е-мейл",
  telegram: "Телеграм",
};
export default function ClientListBox(data) {
  const normalDate = formatDate(data.createdAt);

  const clientsListBox = document.createElement("div");
  clientsListBox.classList.add(
    "bg-white",
    "rounded-3xl",
    "px-5",
    "py-5",
    "grid",
    "grid-cols-4",
    "mb-5"
  );

  const clientsFullName = document.createElement("div");
  clientsFullName.classList.add("full-name");
  clientsFullName.textContent = `${data.surname} ${data.name} ${data.lastName}`;

  const clientCreatedDate = document.createElement("div");
  clientCreatedDate.classList.add("created-date");
  clientCreatedDate.textContent = normalDate;

  const clientContactsBox = document.createElement("div");
  clientContactsBox.classList.add("contacts-box");

  clientContactsBox.append(
    ...data.contacts.map((element) =>
      create("div", { content: `${types[element.type]}: ${element.value}` })
    )
  );
  const clientChangeBtnsBox = create("div", {
    className: "change-btn-box flex justify-end items-start gap-3",
  });

  clientChangeBtnsBox.append(
    Button("Изменить", "success", {
      onclick: () => CreateModalWindow(true, "edit"),
      className: "hover:bg-[#157739]",
    }),
    Button("Удалить", "error", { className: "hover:bg-[#881c1c]" })
  );

  clientsListBox.append(
    clientsFullName,
    clientCreatedDate,
    clientContactsBox,
    clientChangeBtnsBox
  );

  return clientsListBox;
}
