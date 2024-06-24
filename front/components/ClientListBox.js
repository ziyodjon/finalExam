export default function ClientListBox(data) {
  const clientsListBox = document.createElement("div");
  clientsListBox.classList.add(
    "bg-white",
    "rounded-3xl",
    "px-5",
    "py-5",
    "grid",
    "grid-cols-4",
    "mb-5"
  );

  const clientsFullName = document.createElement("div");
  clientsFullName.classList.add("full-name");
  clientsFullName.textContent = "Тавров Игорь Иванович";

  const clientCreatedDate = document.createElement("div");
  clientCreatedDate.classList.add("created-date");
  clientCreatedDate.textContent = "13.01.2024";

  const clientContactsBox = document.createElement("div");
  clientContactsBox.classList.add("contacts-box");
  const clientContactValues = {
    phone: "+79053445566",
    email: "test@mail.ru",
    telegram: "@usertelegram",
  };
  const { phone, email, telegram } = clientContactValues;
  const clientChangeElements = `
      <p>Тел: <b>${phone}</b></p>
      <p>E-mail: <b>${email}</b></p>
      <p>Телеграм: <b>${telegram}</b></p>
    `;
  clientContactsBox.innerHTML = clientChangeElements;
  const clientChangeBtnsBox = document.createElement("div");
  clientChangeBtnsBox.classList.add(
    "change-btn-box",
    "flex",
    "justify-end",
    "items-start",
    "gap-3"
  );

  const clientEditBtn = document.createElement("button");
  clientEditBtn.classList.add(
    "text-white",
    "bg-[#169d1c]",
    "rounded-full",
    "py-1",
    "px-5"
  );
  clientEditBtn.textContent = "Изменить";
  const clientDeleteBtn = document.createElement("button");
  clientDeleteBtn.classList.add(
    "text-white",
    "bg-[#ee3d54]",
    "rounded-full",
    "py-1",
    "px-5"
  );
  clientDeleteBtn.textContent = "Удалить";

  clientChangeBtnsBox.append(clientEditBtn, clientDeleteBtn);

  clientsListBox.append(
    clientsFullName,
    clientCreatedDate,
    clientContactsBox,
    clientChangeBtnsBox
  );

  return clientsListBox;
}
