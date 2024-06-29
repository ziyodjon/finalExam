export default function Select({ options, ...props } = {}) {
  const select = document.createElement("select");

  Object.assign(select, props);

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    select.appendChild(option);
  });

  return select;
}
