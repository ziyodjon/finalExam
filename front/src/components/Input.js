export default function Input(props = {}) {
  const input = document.createElement("input");

  Object.assign(input, props);

  return input;
}
