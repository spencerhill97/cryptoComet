export const FetchCoinList = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
};

export const FetchCoin = (id) => {
  `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const FetchCoinHistory = (id, days, currency) => {
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`;
};
