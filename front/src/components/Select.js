export default function Select({ options, ...props } = {}) {
  const select = document.createElement("select");

  Object.assign(select, props);

  options.forEach((optionData) => {
    const option = document.createElement("option");
    for (let i in optionData) {
      if (optionData[i]) {
        option[i] = optionData[i];
      }
    }
    select.appendChild(option);
  });

  return select;
}
