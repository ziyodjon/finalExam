import Input from "./Input";
import Select from "./Select.js";
import { create, getContacts } from "../utils/index.js";

export default function AddClientContacts(CONTACTS) {
  const length = CONTACTS.length;
  const addContactsItems = create("div", {
    className: "addContactsItems flex justify-between gap-1 my-[10px]",
  });

  const addContactSelect = Select({
    className:
      "contactTypes bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[162px]",
    name: `contactType${length + 1}`,
    onchange: () => {
      const selectValue = getContacts();
    },
    options: [
      { value: "phone", text: "Телефон" },
      { value: "email", text: "E-mail" },
      { value: "telegram", text: "Телеграм" },
    ],
  });

  const addContactInput = Input({
    type: "text",
    name: `contactValue${length + 1}`,
    placeholder: "Значения контакта",
    className:
      "contactValue bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[268px]",
  });

  const addContactDelIcon = create("i", {
    className: "fa fa-trash-o text-[#484848] text-[20px]",
  });

  const addContactDelBtn = document.createElement("button");
  addContactDelBtn.classList.add("delContactItem");
  addContactDelBtn.type = "button";

  addContactDelBtn.addEventListener("click", function (e) {
    if (this.parentNode.id === e.target.parentNode.id) {
      this.parentNode.remove();
    }
  });

  addContactDelBtn.append(addContactDelIcon);

  addContactsItems.append(addContactSelect, addContactInput, addContactDelBtn);
  return addContactsItems;
}
