import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const create = (name, { className, content, id } = {}) => {
  const el = document.createElement(name);
  if (className != null) el.className = className;
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

export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const cn = (classNames) => twMerge(clsx(classNames));
