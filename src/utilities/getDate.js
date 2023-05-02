export const getDateAndTime = (milliseconds) => {
  const newDate = new Date(milliseconds);
  const AM_OR_PM = newDate.getHours() >= 12 ? "PM" : "AM";
  const hours =
    newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours();
  const minutes =
    String(newDate.getMinutes()).length === 1
      ? String(newDate.getMinutes()) + "0"
      : newDate.getMinutes();
  const month = newDate.getUTCMonth() + 1;
  const date = newDate.getUTCDate();
  const year = String(newDate.getUTCFullYear()).slice(2);
  return `${month}/${date}/${year} ${hours}:${minutes}${AM_OR_PM}`;
};

export const getDateWithoutTime = (milliseconds) => {
  const newDate = new Date(milliseconds);
  const month = newDate.getUTCMonth() + 1;
  const date = newDate.getUTCDate();
  const year = String(newDate.getUTCFullYear()).slice(2);
  return `${month}/${date}/${year}`;
};
