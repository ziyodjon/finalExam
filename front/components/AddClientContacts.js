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
  const addContactSelect = document.createElement("select");
  addContactSelect.classList.add(
    "bg-[#f2f2f2]",
    "rounded-full",
    "px-[30px]",
    "py-[12px]",
    "w-[162px]"
  );
  addContactsItems.setAttribute("id", unicID);
  const options = [
    { value: "phone", text: "Phone" },
    { value: "emal", text: "E-mail" },
    { value: "telegram", text: "Telegram" },
  ];
  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    addContactSelect.appendChild(option);
  });

  const addContactInput = document.createElement("input");
  addContactInput.type = "text";
  addContactInput.name = "types";
  addContactInput.placeholder = "Выберите ответ";
  addContactInput.classList.add(
    "bg-[#f2f2f2]",
    "rounded-full",
    "px-[30px]",
    "py-[12px]",
    "w-[268px]"
  );

  addContactInput.setAttribute("id", unicID);

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
