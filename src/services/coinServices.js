export const fetchCoinList = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d%2C30d&locale=en`;
};

export const fetchCoin = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const fetchCoinHistory = (id, days, currency) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
};

export const fetchAllCoinNames = () => {
  return "https://api.coingecko.com/api/v3/coins/list";
};
