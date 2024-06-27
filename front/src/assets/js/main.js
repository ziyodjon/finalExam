import "../css/style.css";
import { getElement } from "../../utils/index.js";
import app from "./app.js";

const root = getElement("#app");
root.append(app);
