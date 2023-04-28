export const roundNumber = (number) => {
  const roundingRegex = /^[\d]+\.?(\d\d[0-9]?|0*[\d]{1,3})?/gi;
  const stringNum = String(number).match(roundingRegex)[0];
  return stringNum;
};
