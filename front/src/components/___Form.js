export const rules = {
  name: {
    type: String,
    required: true,
    length: { min: 2, max: 10 },
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    pattern: { value: /\d{4}/, message: "Invalid email value" },
  },
};

export class Form {
  constructor(id, rules, requredMsg = "This field is required") {
    this.form = document.createElement("form");
    this.form.setAttribute("id", id);
    this.requredMsg = requredMsg;
    this.rules = rules;
    this.form.onsubmit = this.onSubmit;
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log("Submitting form");
    }
  };
  addItem(item) {
    item.addEventListener("input", () => {
      item.classList.remove("invalid-field");
    });
    this.form.append(item);
  }
  setClass(classes) {
    this.form.className = classes;
  }
  validate() {
    const elements = this.form.elements;
    let validated = true;
    Object.keys(this.rules).forEach((key) => {
      const value = elements[key].value;
      if (this.rules[key].required && value.trim().length < 1) {
        console.log(this.rules[key]);
        validated = false;
        elements[key].classList.add("invalid-field");
      }
      if (
        this.rules[key].pattern != null &&
        !this.rules[key].pattern.value.test(value)
      ) {
        validated = false;
        console.log(this.rules[key].pattern.message);
        elements[key].classList.add("invalid-field");
      }
    });
    return validated;
  }
  render() {
    return this.form;
  }
}
