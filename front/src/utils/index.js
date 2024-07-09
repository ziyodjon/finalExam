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





export function sortNames(arr, dir) {
  const clientsListWrap = document.querySelector(".clients-list-wrap");
  const fioIconArea = document.querySelector(".fio-icon-area");
  const arrowUp = document.createElement("i");
  arrowUp.classList.add("fa", "fa-sort-asc", "px-1");

  const arrowDown = document.createElement("i");
  arrowDown.classList.add("fa", "fa-sort-desc", "px-1");
  let result = "";
  if (dir === false) {
    result = arr.sort((a, b) => {
      return a.name.localeCompare(b.name);
      // if (a.name > b.name) {
      //   return -1;
      // }
      // return 0;
    });
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowUp);
  }

  if (dir === true) {
    result = arr.sort((a, b) => {
      return b.name.localeCompare(a.name);
      // if (a.name < b.name) {
      //   return 1;
      // }
      // return 0;
    });
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowDown);
  }

  const clientsListBoxes = result.map((data) => ClientListBox(data));
  clientsListWrap.innerHTML = "";
  clientsListWrap.append(...clientsListBoxes);
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

    result = arr.sort((a, b) => {
      return b.createdAt.localeCompare(a.createdAt);
    });
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowUp);
  }

  if (dir === true) {
    result = arr.sort((a, b) => {
      return a.createdAt.localeCompare(b.createdAt);
    });
    fioIconArea.innerHTML = "";
    fioIconArea.append(arrowDown);
  }
  const clientsListBoxes = result.map((data) => ClientListBox(data));
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
  if (myModal !== null) {
    myModal.remove();
  }
}


let isActive = false;
export function myToggle() {
  return (isActive = !isActive);
}

export function validateForm() {
  // Получаем все инпуты в форме
  const inputs = document.querySelectorAll('input');

  // Перебираем каждый инпут и проверяем на пустоту
  for (let input of inputs) {
    if (input.value.trim() === '') {
      //alert('Заполните все поля');
      input.classList.add("invalid-field");
      return false; // Останавливаем отправку формы
    }
  }

  return true; // Продолжаем отправку формы
}


export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const cn = (classNames) => twMerge(clsx(classNames));
