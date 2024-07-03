import CreateModalWindow from "./CreateModalWindow.js";
import { create, formatDate } from "../utils/index.js";
import { Button } from "./Button.js";
import { getDataById } from "../api/index.js";
import { renderData } from "../utils/index.js";
import { deleteData } from "../utils/index.js";
const types = {
  phone: "Телефон",
  email: "Е-мейл",
  telegram: "Телеграм",
};
export default function ClientListBox(data) {
  const normalDate = formatDate(data.createdAt);

  const clientsListBox = create("div", {
    className:
      "bg-white hover:bg-[#f8f8ff] rounded-3xl px-5 py-5 grid grid-cols-4 mb-5",
  });

  const clientsFullName = document.createElement("div");
  clientsFullName.classList.add("full-name");
  clientsFullName.textContent = `${data.surname} ${data.name} ${data.lastName}`;

  const clientCreatedDate = document.createElement("div");
  clientCreatedDate.classList.add("created-date");
  clientCreatedDate.textContent = normalDate;

  const clientContactsBox = document.createElement("div");
  clientContactsBox.classList.add("contacts-box");

  if (data.contacts) {
    clientContactsBox.append(
      ...data.contacts.map((element) =>
        create("div", { content: `${types[element.type]}: ${element.value}` })
      )
    );
  }

  const clientChangeBtnsBox = create("div", {
    className: "change-btn-box flex justify-end items-start gap-3",
  });

  clientChangeBtnsBox.append(
    Button("Изменить", "success", {
      onclick: async (e) => {
        const oneClientId = e.target.id;

        const oneClientData = await getDataById(oneClientId);

        const modal = CreateModalWindow(true, "edit", oneClientData);
        document.body.append(modal);
      },
      className: "hover:bg-[#157739]",
      id: data.id,
    }),
    Button("Удалить", "error", {
      onclick: (e) => {
        const currentDataId = e.target.id;
        const url = `http://localhost:3000/api/clients/${currentDataId}`;
        if (confirm("Вы уверены удалить этот запись ?")) {
          deleteData(url, renderData);
        }
      },
      className: "hover:bg-[#881c1c]",
      id: data.id,
    })
  );

  clientsListBox.append(
    clientsFullName,
    clientCreatedDate,
    clientContactsBox,
    clientChangeBtnsBox
  );

  return clientsListBox;
}
