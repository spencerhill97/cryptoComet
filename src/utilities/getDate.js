export const getDate = (milliseconds) => {
  const stringDate = new Date(milliseconds);
  const newDate = `${
    stringDate.getUTCMonth() + 1
  }/${stringDate.getUTCDate()}/${String(stringDate.getUTCFullYear()).slice(2)}`;

  return newDate;
};
