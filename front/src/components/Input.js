export default function Input(props = {}) {
  const input = document.createElement("input");
  input.type = props.text;
  input.name = props.name;
  input.placeholder = props.placeholder;

  if (props.className) {
    props.className.forEach((classes) => {
      input.classList.add(classes);
    });
  }

  return input;
}
