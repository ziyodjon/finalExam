import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ClientListBox from "../components/ClientListBox.js";
import { request } from "../api/index.js";

export const create = (name, { className, content, id, type } = {}) => {
  const el = document.createElement(name);
  if (className != null) el.className = className;
  if (type != null) el.type = type;
  if (id != null) el.id = id;
  if (content != null) {
    el.innerHTML = content;
  }
  return el;
};

export const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "2-digit",
  });

export function getContacts() {
  return document.querySelectorAll(".contactTypes");
}

// Функция для отправки данных
export async function saveData(url = "", data = {}, onSuccess) {
  // Параметры запроса
  const response = await fetch(url, {
    method: "POST", // Метод запроса
    headers: {
      "Content-Type": "application/json", // Заголовок для указания типа контента
    },
    body: JSON.stringify(data), // Преобразование данных в JSON-строку
  });
  onSuccess?.();
  // Ожидание ответа от сервера
  return response.json(); // Преобразование ответа в JSON
}

// Update data
export async function updateData(url, data, onSuccess) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Data updated successfully:", result);
    onSuccess?.();
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

// export async function sortName() {
//   const clientsListWrap = document.querySelector(".clients-list-wrap");
//   const allData = await request("clients");
//   allData.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   const clientsListBoxes = allData.map((data) => ClientListBox(data));
//   clientsListWrap.innerHTML = "";
//   clientsListWrap.append(...clientsListBoxes);
// }

export function sortNames(arr, dir) {
  const clientsListWrap = document.querySelector(".clients-list-wrap");
  const fioIconArea = document.querySelector(".fio-icon-area");
  const arrowUp = document.createElement("i");
  arrowUp.classList.add("fa", "fa-sort-asc", "px-1");

  const arrowDown = document.createElement("i");
  arrowDown.classList.add("fa", "fa-sort-desc", "px-1");
  let result = "";
  if (dir === false) {
    result = arr.sort((a, b) => a.name > b.name);
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowUp);
  }

  if (dir === true) {
    result = arr.sort((a, b) => a.name < b.name);
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowDown);
  }
  const clientsListBoxes = result.map((data) => ClientListBox(data));
  clientsListWrap.innerHTML = "";
  clientsListWrap.append(...clientsListBoxes);
  //return result;
}

export function sortDates(arr, dir) {
  const clientsListWrap = document.querySelector(".clients-list-wrap");
  const fioIconArea = document.querySelector(".date-icon-area");
  const arrowUp = document.createElement("i");
  arrowUp.classList.add("fa", "fa-sort-asc", "px-1");

  const arrowDown = document.createElement("i");
  arrowDown.classList.add("fa", "fa-sort-desc", "px-1");
  let result = "";
  if (dir === false) {
    result = arr.sort((a, b) => a.createdAt > b.createdAt);
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowUp);
  }

  if (dir === true) {
    result = arr.sort((a, b) => a.createdAt < b.createdAt);
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowDown);
  }
  const clientsListBoxes = result.map((data) => ClientListBox(data));
  clientsListWrap.innerHTML = "";
  clientsListWrap.append(...clientsListBoxes);
  //return result;
}

export async function sortDate() {
  const clientsListWrap = document.querySelector(".clients-list-wrap");
  const allData = await request("clients");
  allData.sort((a, b) => {
    if (a["createdAt"] > b["createdAt"]) {
      return -1;
    }
    if (a["createdAt"] < b["createdAt"]) {
      return 1;
    }
    return 0;
  });
  const clientsListBoxes = allData.map((data) => ClientListBox(data));
  clientsListWrap.innerHTML = "";
  clientsListWrap.append(...clientsListBoxes);
}

export async function renderData() {
  const clientsListWrap = document.querySelector(".clients-list-wrap");
  const allData = await request("clients");
  const clientsListBoxes = allData.map((data) => ClientListBox(data));
  clientsListWrap.innerHTML = "";
  clientsListWrap.append(...clientsListBoxes);
}

export function delModal() {
  const myModal = document.getElementById("mymodal");
  myModal.classList.add("hide");
  myModal.classList.remove("open");
  myModal.remove();
}

export async function deleteData(url, onSuccess) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    onSuccess?.();
    console.log("Data deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}
let isActive = false;
export function myToggle() {
  return (isActive = !isActive);
}

export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const cn = (classNames) => twMerge(clsx(classNames));
