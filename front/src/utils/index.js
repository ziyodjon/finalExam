import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
export async function saveData(url = "", data = {}) {
  // Параметры запроса
  const response = await fetch(url, {
    method: "POST", // Метод запроса
    headers: {
      "Content-Type": "application/json", // Заголовок для указания типа контента
    },
    body: JSON.stringify(data), // Преобразование данных в JSON-строку
  });

  // Ожидание ответа от сервера
  return response.json(); // Преобразование ответа в JSON
}

export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const cn = (classNames) => twMerge(clsx(classNames));
