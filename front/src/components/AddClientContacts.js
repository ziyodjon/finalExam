import Input from "./Input";
import Select from "./Select.js";

export default function AddClientContacts() {
  const addContactsArea = document.querySelector(".addContactsArea");
  const addContactsItems = document.createElement("div");
  const unicID = Date.now();

  addContactsItems.classList.add(
    "addContactsItems",
    "flex",
    "justify-between",
    "gap-1",
    "my-[10px]"
  );

  const addContactSelect = Select({
    className: [
      "bg-[#f2f2f2]",
      "rounded-full",
      "px-[30px]",
      "py-[12px]",
      "w-[162px]",
    ],
    options: [
      { value: "phone", text: "Phone" },
      { value: "emal", text: "E-mail" },
      { value: "telegram", text: "Telegram" },
    ],
  });

  addContactsItems.setAttribute("id", unicID);

  const addContactInput = Input({
    type: "text",
    name: "lastname",
    placeholder: "Значения контакта",
    className: [
      "bg-[#f2f2f2]",
      "rounded-full",
      "px-[30px]",
      "py-[12px]",
      "w-[268px]",
    ],
    id: unicID,
  });

  const addContactDelIcon = document.createElement("i");
  addContactDelIcon.classList.add(
    "fa",
    "fa-trash-o",
    "text-[#484848]",
    "text-[20px]"
  );
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
