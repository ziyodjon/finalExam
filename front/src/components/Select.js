export default function Select({ options, ...props } = {}, datas) {
  const select = document.createElement("select");

  Object.assign(select, props);

  options.forEach((optionData, index) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    option.selected = optionData.selected;
    select.appendChild(option);
  });

  return select;
}
