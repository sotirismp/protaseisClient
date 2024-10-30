export function formatToGreekTime(isoDate) {
  const date = new Date(isoDate);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Athens", // Greek timezone
  };

  return date.toLocaleString("en-GB", options).replace(",", "");
}
