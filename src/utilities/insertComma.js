export const insertComma = (number) => {
  return (number > 1 && Number(number).toLocaleString()) || number;
};
