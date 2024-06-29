import AddClientContacts from "./AddClientContacts.js";
import { Button } from "./Button.js";
import { create } from "../utils/index.js";
import Input from "./Input.js";
import { saveData } from "../utils/index.js";

let CONTACTS = [];

export default function CreateModalWindow(visibility, type) {
  const modal = create("div", {
    className: "modal flex justify-center items-center hide",
    content: null,
    id: "mymodal",
  });

  const modalBox = create("div", {
    className:
      "modal__box w-[545px] min-h-[380px] bg-white rounded-[30px] flex flex-col justify-between",
  });

  const modalHeader = create("div", {
    className: "modal__header flex justify-between px-[30px] py-[20px]",
  });

  const modalCaptionText = create("h2", {
    className: null,
    content: "Создания клиента",
  });

  const modalCloseBtn = create("button", {
    className: "close__btn",
  });

  const modalCloseIcon = create("i", {
    className: "fa fa-times",
  });

  const modalBody = create("div", {
    className: "modal__body px-[30px] flex flex-col gap-3",
  });

  const modalForm = create("form", {
    className: "modalForm",
    id: "createForm",
  });

  const modalFormInputName = Input({
    type: "text",
    name: "name",
    placeholder: "Имя",
    required: "required",
    id: "name",
    className:
      "bg-[#f2f2f2] focus:outline-none focus-visible:white border-2 border-transparent rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const modalFormInputSurname = Input({
    type: "text",
    name: "surname",
    placeholder: "Фамилия",
    required: "required",
    id: "surname",
    className:
      "bg-[#f2f2f2] border-2 border-transparent rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const modalFormInputLastName = Input({
    type: "text",
    name: "lastname",
    placeholder: "Отчество",
    required: "required",
    id: "lastname",
    className:
      "bg-[#f2f2f2] border-2 border-transparent rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const addContactsArea = create("div", {
    className: "addContactsArea",
  });

  const addContactBtnWrap = create("div", {
    className: "addContactBtnWrap flex justify-center py-[20px]",
  });

  const addContactBtn = Button("Добавить контакт", "success", {
    onclick: () => {
      document
        .querySelector(".addContactsArea")
        .append(AddClientContacts(CONTACTS));
      CONTACTS.push({});
    },

    className:
      "addContacts_btn text-white bg-[#0086B0] rounded-full py-3 px-10 hover:bg-[#1a5b6f]",
    type: "button",
  });

  const modalFooter = create("div", {
    className: "modal__footer flex justify-between",
  });

  const modalSingleSaveBtn = Button("Сохранить", "success", {
    onclick: (e) => {
      e.preventDefault();
      const elements = document.getElementById("createForm").elements;

      const formInputValues = {
        name: elements.name.value,
        surname: elements.surname.value,
        lastName: elements.lastname.value,
        contacts: CONTACTS.map((_, index) => ({
          type: elements[`contactType${index + 1}`].value,
          value: elements[`contactValue${index + 1}`].value,
        })),
      };

      if (
        formInputValues.name.length > 0 &&
        formInputValues.surname.length > 0
      ) {
        const savedData = saveData(
          "http://localhost:3000/api/clients/",
          formInputValues
        );

        console.log(savedData);
      }

      //formInputValues.contacts.push({ type: "asdasdasd", value: "asdasd" });

      // inputName.className = cn([
      //   inputName.value.length === 0 &&
      //     "bg-red-100 border-2 border-red-200 rounded-full px-[30px] py-[12px] w-[100%]",
      // ]);

      // inputSurName.className = cn([
      //   inputSurName.value.length === 0 &&
      //     "bg-red-100 border-2 border-red-200 rounded-full px-[30px] py-[12px] w-[100%]",
      // ]);

      // inputLastName.className = cn([
      //   inputLastName.value.length === 0 &&
      //     "bg-red-100 border-2 border-red-200 rounded-full px-[30px] py-[12px] w-[100%]",
      // ]);
    },
    className:
      "save_btn w-[100%] text-white bg-[#169d1c] hover:bg-[#157739] rounded-b-[30px] rounded-tl-[0px] rounded-tr-[0px] py-3 px-10",
    type: "submit",
  });

  const modalDoubleDeleteBtn = Button("Удалить", "error", {
    onclick: () => console.log("We should delete this item"),
    className:
      "save_btn w-[100%] text-white bg-[#ee3d54] hover:bg-[#881c1c] rounded-b-[30px] rounded-tl-[0px] rounded-tr-[0px] rounded-br-[0px] py-3 px-10",
  });

  const modalDoubleSaveBtn = Button("Сохранить", "success", {
    onclick: () => {
      console.log("Save data");
    },
    className:
      "save_btn w-[100%] text-white bg-[#00B007] rounded-b-[30px] hover:bg-[#157739] rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[0px] py-3 px-10",
    type: "submit",
  });

  if (visibility) {
    modal.classList.remove("hide");
    modal.classList.add("open");
  }

  modal.addEventListener("click", (e) => {
    if (e.target.id === "mymodal") {
      modal.classList.add("hide");
      modal.classList.remove("open");
      modal.remove();
    }
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modal.classList.remove("open");
    modal.remove();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hide");
      modal.classList.remove("open");
      modal.remove();
    }
  });

  if (type === "edit") {
    modalFooter.append(modalDoubleDeleteBtn, modalDoubleSaveBtn);
  } else {
    modalFooter.append(modalSingleSaveBtn);
  }

  addContactBtnWrap.append(addContactBtn);

  modalBody.append(
    modalFormInputName,
    modalFormInputSurname,
    modalFormInputLastName,
    addContactsArea,
    addContactBtnWrap
  );

  //modalBody.append(modalForm);
  modalCloseBtn.append(modalCloseIcon);
  modalHeader.append(modalCaptionText, modalCloseBtn);
  modalBox.append(modalHeader, modalBody, modalFooter);
  modalForm.append(modalBox);
  modal.appendChild(modalForm);

  return modal;
}
