import { cn } from "../utils";

export const Button = (text, type = "success", props) => {
  const btn = document.createElement("button");
  btn.className = cn([
    "rounded-lg px-4 py-2",
    type === "success" && "bg-green-600 text-white",
    type === "error" && "bg-red-600 text-white",
  ]);
  btn.innerHTML = text;
  Object.assign(btn, props);
  return btn;
};
