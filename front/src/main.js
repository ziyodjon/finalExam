import "./assets/css/style.css";
import { Button } from "./components/Button.js";
import { Form, rules } from "./components/Form.js";
import Input from "./components/Input.js";
import { getElement } from "./utils/index.js";
import app from "./app.js";

const root = getElement("#app");
root.append(app);
