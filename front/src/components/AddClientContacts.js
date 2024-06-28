import Input from "./Input";
import Select from "./Select.js";
import { create } from "../utils/index.js";

export default function AddClientContacts() {
  const addContactsArea = document.querySelector(".addContactsArea");
  const unicID = Date.now();

  const addContactsItems = create("div", {
    className: "addContactsItems flex justify-between gap-1 my-[10px]",
    id: unicID,
  });

  const addContactSelect = Select({
    className: "bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[162px]",
    options: [
      { value: "phone", text: "Телефон" },
      { value: "emal", text: "E-mail" },
      { value: "telegram", text: "Телеграм" },
    ],
  });

  const addContactInput = Input({
    type: "text",
    name: "lastname",
    placeholder: "Значения контакта",
    className: "bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[268px]",
    id: unicID,
  });

  const addContactDelIcon = create("i", {
    className: "fa fa-trash-o text-[#484848] text-[20px]",
  });

  const addContactDelBtn = document.createElement("button");
  addContactDelBtn.classList.add("delContactItem");
  addContactDelBtn.setAttribute("id", unicID);

  addContactDelBtn.addEventListener("click", function (e) {
    if (this.parentNode.id === e.target.parentNode.id) {
      this.parentNode.remove();
    }
  });

  addContactDelBtn.append(addContactDelIcon);

  addContactsItems.append(addContactSelect, addContactInput, addContactDelBtn);

  addContactsArea.append(addContactsItems);
}
