export default function Input({ className, ...props } = {}) {
  const input = document.createElement("input");
  input.className = `bg-[#f2f2f2] focus:outline-none focus-visible:white border-2 border-transparent rounded-full px-[30px] py-[12px] w-[100%]`;
  Object.assign(input, props);

  return input;
}
