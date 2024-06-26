export default function GetNormalDate(isoDate) {
  const date = new Date(isoDate);

  const options = {
    year: "numeric",
    day: "numeric",
    month: "2-digit",
  };

  const normalDate = date.toLocaleDateString("en-US", options);
  return normalDate;
}
