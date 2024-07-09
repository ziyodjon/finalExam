import Input from "./Input";
import Select from "./Select.js";
import { create, getContacts } from "../utils/index.js";

export default function AddClientContacts(CONTACTS, contact = {}, unicId) {
  //const length = CONTACTS.length;
  const addContactsItems = create("div", {
    className: "addContactsItems flex justify-between gap-1 my-[10px]",
  });

  let selectValue = false;
  if (contact && contact.type) {
    selectValue = contact.type;
  }

  const addContactSelect = Select({
    className:
      "contactTypes bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[162px]",
    name: `contactType${unicId}`,
    onchange: () => {
      const selectValue = getContacts();
    },
    options: [
      {
        value: "phone",
        text: "Телефон",
        selected: contact.hasOwnProperty("type") && contact.type == "phone",
      },
      {
        value: "email",
        text: "E-mail",
        selected: contact.hasOwnProperty("type") && contact.type == "email",
      },
      {
        value: "telegram",
        text: "Телеграм",
        selected: contact.hasOwnProperty("type") && contact.type == "telegram",
      },
    ],
  });

  const addContactInput = Input({
    type: "text",
    name: `contactValue${unicId}`,
    placeholder: "Значения контакта",
    value: contact.hasOwnProperty("value") ? contact.value : "",
    className:
      "contactValue bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[268px]",
    id: unicId
  });

  const addContactDelIcon = create("i", {
    className: "fa fa-trash-o text-[#484848] text-[20px]",
    id: unicId
  });

  const addContactDelBtn = document.createElement("button");
  addContactDelBtn.classList.add("delContactItem");
  //addContactDelBtn.setAttribute('id', Date.now());
  addContactDelBtn.type = "button";

  addContactDelBtn.addEventListener("click", function (e) {

    if (this.parentNode.id === e.target.parentNode.id) {
      this.parentNode.remove();
      CONTACTS.forEach((el, index) => {
        if (el.id == e.target.id) {
          CONTACTS.splice(index, 1)
        }
      });
      //console.log(e.target.id);
    }


  });

  addContactDelBtn.append(addContactDelIcon);

  addContactsItems.append(addContactSelect, addContactInput, addContactDelBtn);
  return addContactsItems;
}
