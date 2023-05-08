export const roundNumber = (number) => {
  return String(number).length > 8 ? parseFloat(number).toFixed(7) : number;
};

export const roundNumberTo3 = (number) => {
  return parseFloat(number).toFixed(3);
};
