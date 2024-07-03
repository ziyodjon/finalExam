import "./assets/css/style.css";
import { Button } from "./components/Button.js";
import { Form, rules } from "./components/Form.js";
import Input from "./components/Input.js";
import { getElement } from "./utils/index.js";
import app from "./app.js";
// const forma = new Form("this_form", rules, "Bu maydon talab qilinadi");
// forma.setClass("p-20 flex flex-col gap-4");
// forma.addItem(
//   Input({
//     name: "name",
//     className: "bg-gray-200",
//     placeholder: "Name",
//   })
// );
// forma.addItem(
//   Input({
//     name: "lastName",
//     className: "bg-gray-200",
//     placeholder: "Last name",
//   })
// );
// forma.addItem(
//   Input({
//     name: "email",
//     className: "bg-gray-200",
//     placeholder: "E-mail",
//   })
// );
// forma.addItem(
//   Button("Send data", undefined, {
//     type: "submit",
//     className: "rounded-full py-4",
//   })
// );
const root = getElement("#app");
// root.append(forma.render());
root.append(app);
