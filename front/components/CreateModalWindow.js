import AddClientContacts from "./AddClientContacts.js";

export default function CreateModalWindow(visibility, type) {
  const bodyRoot = document.getElementById("root");
  const modal = document.createElement("div");
  modal.setAttribute("id", "mymodal");
  modal.classList.add(
    "modal",
    "flex",
    "justify-center",
    "items-center",
    "hide"
  );
  const modalBox = document.createElement("div");
  modalBox.classList.add(
    "modal__box",
    "w-[545px]",
    "min-h-[380px]",
    "bg-white",
    "rounded-[30px]",
    "flex",
    "flex-col",
    "justify-between"
  );

  const modalHeader = document.createElement("div");
  modalHeader.classList.add(
    "modal__header",
    "flex",
    "justify-between",
    "px-[30px]",
    "py-[20px]"
  );

  const modalCaptionText = document.createElement("h2");
  modalCaptionText.textContent = "Создания клиента";

  const modalCloseBtn = document.createElement("button");
  modalCloseBtn.classList.add("close__btn");

  const modalCloseIcon = document.createElement("i");
  modalCloseIcon.classList.add("fa", "fa-times");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal__body", "px-[30px]");

  const modalForm = document.createElement("form");
  modalForm.classList.add("flex", "flex-col", "gap-3");

  const modalFormInputName = document.createElement("input");
  modalFormInputName.type = "text";
  modalFormInputName.name = "name";
  modalFormInputName.placeholder = "Имя";
  modalFormInputName.classList.add(
    "bg-[#f2f2f2]",
    "rounded-full",
    "px-[30px]",
    "py-[12px]",
    "w-[100%]"
  );

  const modalFormInputSurname = document.createElement("input");
  modalFormInputSurname.type = "text";
  modalFormInputSurname.name = "surname";
  modalFormInputSurname.placeholder = "Фамилия";
  modalFormInputSurname.classList.add(
    "bg-[#f2f2f2]",
    "rounded-full",
    "px-[30px]",
    "py-[12px]",
    "w-[100%]"
  );

  const modalFormInputLastName = document.createElement("input");
  modalFormInputLastName.type = "text";
  modalFormInputLastName.name = "lastname";
  modalFormInputLastName.placeholder = "Отчество";
  modalFormInputLastName.classList.add(
    "bg-[#f2f2f2]",
    "rounded-full",
    "px-[30px]",
    "py-[12px]",
    "w-[100%]"
  );

  const addContactsArea = document.createElement("div");
  addContactsArea.classList.add("addContactsArea");

  const addContactBtnWrap = document.createElement("div");
  addContactBtnWrap.classList.add(
    "addContactBtnWrap",
    "flex",
    "justify-center",
    "py-[20px]"
  );

  const addContactBtn = document.createElement("button");
  addContactBtn.classList.add(
    "addContacts_btn",
    "text-white",
    "bg-[#0086B0]",
    "rounded-full",
    "py-3",
    "px-10"
  );
  addContactBtn.textContent = "Добваить контакт";

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal__footer", "flex", "justify-between");

  const modalSingleSaveBtn = document.createElement("button");
  modalSingleSaveBtn.textContent = "Сохранить";
  modalSingleSaveBtn.classList.add(
    "save_btn",
    "w-[100%]",
    "text-white",
    "bg-[#169d1c]",
    "rounded-b-[30px]",
    "rounded-tl-[0px]",
    "rounded-tr-[0px]",
    "py-3",
    "px-10"
  );

  const modalDoubleDeleteBtn = document.createElement("button");
  modalDoubleDeleteBtn.textContent = "Удалить";
  modalDoubleDeleteBtn.classList.add(
    "save_btn",
    "w-[100%]",
    "text-white",
    "bg-[#ee3d54]",
    "rounded-b-[30px]",
    "rounded-tl-[0px]",
    "rounded-tr-[0px]",
    "rounded-br-[0px]",
    "py-3",
    "px-10"
  );

  const modalDoubleSaveBtn = document.createElement("button");
  modalDoubleSaveBtn.textContent = "Сохранить";
  modalDoubleSaveBtn.classList.add(
    "save_btn",
    "w-[100%]",
    "text-white",
    "bg-[#00B007]",
    "rounded-b-[30px]",
    "rounded-tl-[0px]",
    "rounded-bl-[0px]",
    "rounded-tr-[0px]",
    "py-3",
    "px-10"
  );

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

  addContactBtn.addEventListener("click", () => {
    AddClientContacts();
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
  bodyRoot.append(modal);
}
