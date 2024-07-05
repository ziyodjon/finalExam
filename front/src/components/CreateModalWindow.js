import AddClientContacts from "./AddClientContacts.js";
import { Button } from "./Button.js";
import { create } from "../utils/index.js";
import Input from "./Input.js";
import { updateData, deleteData, saveData } from "../api/index.js";
import { renderData, delModal } from "../utils/index.js";
// import Select from "./Select.js";

let CONTACTS = [];

export default function CreateModalWindow(visibility, type, data = {}) {
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
    value: data.name ? data.name : "",
    placeholder: "Имя",
    required: "required",
    id: "name",
  });

  const modalFormInputSurname = Input({
    type: "text",
    name: "surname",
    value: data.surname ? data.surname : "",
    placeholder: "Фамилия",
    required: "required",
    id: "surname",
  });

  const modalFormInputLastName = Input({
    type: "text",
    name: "lastName",
    value: data.lastName ? data.lastName : "",
    placeholder: "Отчество",
    required: "required",
    id: "lastname",
  });

  const addContactsArea = create("div", {
    className: "addContactsArea",
    id: "addContactsArea",
  });

  const addContactBtnWrap = create("div", {
    className: "addContactBtnWrap flex justify-center py-[20px]",
  });

  const addContactBtn = Button("Добавить контакт", "success", {
    onclick: () => {
      addContactsArea.append(AddClientContacts(CONTACTS));
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

      if (elements.name.value !== "") {
        elements.name.classList.remove("invalid-field");
      } else {
        elements.name.classList.add("invalid-field");
      }

      if (elements.surname.value !== "") {
        elements.surname.classList.remove("invalid-field");
      } else {
        elements.surname.classList.add("invalid-field");
      }

      if (elements.lastName.value !== "") {
        elements.lastName.classList.remove("invalid-field");
      } else {
        elements.lastName.classList.add("invalid-field");
      }

      modalFormInputName.addEventListener("input", () => {
        if (elements.name.value !== "" && elements.name.value.length > 0) {
          elements.name.classList.remove("invalid-field");
        } else {
          elements.name.classList.add("invalid-field");
        }
      });

      modalFormInputSurname.addEventListener("input", () => {
        if (
          elements.surname.value !== "" &&
          elements.surname.value.length > 0
        ) {
          elements.surname.classList.remove("invalid-field");
        } else {
          elements.surname.classList.add("invalid-field");
        }
      });

      modalFormInputLastName.addEventListener("input", () => {
        if (
          elements.lastName.value !== "" &&
          elements.lastName.value.length > 0
        ) {
          elements.lastName.classList.remove("invalid-field");
        } else {
          elements.lastName.classList.add("invalid-field");
        }
      });

      const formInputValues = {
        name: elements.name.value,
        surname: elements.surname.value,
        lastName: elements.lastName.value,
        contacts: CONTACTS.map((_, index) => ({
          type: elements[`contactType${index + 1}`].value,
          value: elements[`contactValue${index + 1}`].value,
        })),
      };

      let checkType = false;

      if (formInputValues.contacts.length === 0) {
        CONTACTS.pop();
        checkType = true;
      } else {
        formInputValues.contacts.map((el, index) => {
          const contactIputEl = elements[`contactValue${index + 1}`];

          contactIputEl.addEventListener("input", (e) => {
            if (contactIputEl.value.length > 0) {
              contactIputEl.classList.remove("invalid-field");
            } else {
              contactIputEl.classList.add("invalid-field");
            }
          });

          if (el.value !== "") {
            contactIputEl.classList.remove("invalid-field");
            checkType = true;
          } else {
            contactIputEl.classList.add("invalid-field");

            checkType = false;
          }
        });
      }


      if (
        formInputValues.name.length > 0 &&
        formInputValues.surname.length > 0 &&
        formInputValues.lastName.length > 0 &&
        checkType
      ) {
        saveData(
          "http://localhost:3000/api/clients/",
          formInputValues,
          renderData
        );
        delModal();
      }
    },
    className:
      "save_btn w-[100%] text-white bg-[#169d1c] hover:bg-[#157739] rounded-b-[30px] rounded-tl-[0px] rounded-tr-[0px] py-3 px-10",
    id: data.id,
    type: "submit",
  });

  const modalDoubleDeleteBtn = Button("Удалить", "error", {
    onclick: (e) => {
      e.preventDefault();
      const currentDataId = e.target.id;
      const url = `http://localhost:3000/api/clients/${currentDataId}`;
      if (confirm("Вы уверены удалить этот запись ?")) {
        deleteData(url, renderData);
        delModal();
      }
    },
    className:
      "save_btn w-[100%] text-white bg-[#ee3d54] hover:bg-[#881c1c] rounded-b-[30px] rounded-tl-[0px] rounded-tr-[0px] rounded-br-[0px] py-3 px-10",
    id: data.id,
  });

  const modalDoubleSaveBtn = Button("Сохранить", "success", {
    onclick: (e) => {
      e.preventDefault();
      const elements = document.getElementById("createForm").elements;

      const updatedValues = {
        name: elements.name.value,
        surname: elements.surname.value,
        lastName: elements.lastname.value,
        contacts: CONTACTS.map((_, index) => ({
          type: elements[`contactType${index + 1}`].value,
          value: elements[`contactValue${index + 1}`].value,
        })),
      };

      let checkType = false;
      if (updatedValues.contacts.length === 0) {
        checkType = true;
      } else {
        updatedValues.contacts.map((el, index) => {
          const contactIputEl = elements[`contactValue${index + 1}`];

          contactIputEl.addEventListener("input", (e) => {
            if (contactIputEl.value.length > 0) {
              contactIputEl.classList.remove("invalid-field");
            } else {
              contactIputEl.classList.add("invalid-field");
            }
          });

          if (el.value !== "") {
            contactIputEl.classList.remove("invalid-field");
            checkType = true;
          } else {
            contactIputEl.classList.add("invalid-field");

            checkType = false;
          }
        });
        CONTACTS.pop();
      }


      if (
        updatedValues.name.length > 0 &&
        updatedValues.surname.length > 0 &&
        checkType
      ) {
        updateData(
          `http://localhost:3000/api/clients/${data.id}`,
          updatedValues,
          renderData
        );
        delModal();
        CONTACTS.pop();
      }
      CONTACTS.pop();
    },
    className:
      "save_btn w-[100%] text-white bg-[#00B007] rounded-b-[30px] hover:bg-[#157739] rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[0px] py-3 px-10",
    type: "submit",
    id: data.id,
  });

  if (visibility) {
    modal.classList.remove("hide");
    modal.classList.add("open");
  }

  modal.addEventListener("click", (e) => {
    if (e.target.id === "mymodal") {
      delModal();
      CONTACTS.pop();
    }
  });

  if (data.hasOwnProperty("contacts") && data.contacts.length > 0) {
    const oneClientContacts = data.contacts;
    CONTACTS = [];
    for (let contact of data.contacts) {
      addContactsArea.append(AddClientContacts(CONTACTS, contact));
      CONTACTS.push({});
    }
  }

  modalCloseBtn.addEventListener("click", () => {
    delModal();
    CONTACTS.pop();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      delModal();
      CONTACTS.pop();
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

  modalCloseBtn.append(modalCloseIcon);
  modalHeader.append(modalCaptionText, modalCloseBtn);
  modalBox.append(modalHeader, modalBody, modalFooter);
  modalForm.append(modalBox);
  modal.appendChild(modalForm);

  return modal;
}
