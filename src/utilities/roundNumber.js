export const roundNumber = (number) => {
  return String(number).length > 8 ? parseFloat(number).toFixed(7) : number;
};
