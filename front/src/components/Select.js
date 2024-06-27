export default function Select(props = {}) {
  const select = document.createElement("select");

  if (props.className) {
    props.className.forEach((classes) => {
      select.classList.add(classes);
    });
  }

  if (props.options) {
    props.options.forEach((optionData) => {
      const option = document.createElement("option");
      option.value = optionData.value;
      option.text = optionData.text;
      select.appendChild(option);
    });
  }

  return select;
}
