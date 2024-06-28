import AddClientContacts from "./AddClientContacts.js";
import { Button } from "./Button.js";
import { create } from "../utils/index.js";
import Input from "./Input.js";

export default function CreateModalWindow(visibility, type) {
  //const bodyRoot = document.getElementById("root");

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
    className: "modal__body px-[30px]",
  });

  const modalForm = create("form", {
    className: "flex flex-col gap-3",
  });

  const modalFormInputName = Input({
    type: "text",
    name: name,
    placeholder: "Имя",
    className: "bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const modalFormInputSurname = Input({
    type: "text",
    name: "surname",
    placeholder: "Фамилия",
    className: "bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const modalFormInputLastName = Input({
    type: "text",
    name: "lastname",
    placeholder: "Отчество",
    className: "bg-[#f2f2f2] rounded-full px-[30px] py-[12px] w-[100%]",
  });

  const addContactsArea = create("div", {
    className: "addContactsArea",
  });

  const addContactBtnWrap = create("div", {
    className: "addContactBtnWrap flex justify-center py-[20px]",
  });

  const addContactBtn = Button("Добавить контакт", "success", {
    onclick: () => AddClientContacts(),
    className:
      "addContacts_btn text-white bg-[#0086B0] rounded-full py-3 px-10 hover:bg-[#1a5b6f]",
  });

  const modalFooter = create("div", {
    className: "modal__footer flex justify-between",
  });

  const modalSingleSaveBtn = Button("Сохранить", "success", {
    onclick: () => alert("We should save"),
    className:
      "save_btn w-[100%] text-white bg-[#169d1c] hover:bg-[#157739] rounded-b-[30px] rounded-tl-[0px] rounded-tr-[0px] py-3 px-10",
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

  modalForm.append(
    modalFormInputName,
    modalFormInputSurname,
    modalFormInputLastName
  );

  modalBody.append(modalForm, addContactsArea, addContactBtnWrap);
  modalCloseBtn.append(modalCloseIcon);
  modalHeader.append(modalCaptionText, modalCloseBtn);
  modalBox.append(modalHeader, modalBody, modalFooter);
  modal.appendChild(modalBox);

  return modal;
}
