export const coinInfoKeys = [
  {
    id: "current-price",
    key: "current price",
    value: `market_data.current_price`,
  },
  {
    id: "price-24h",
    key: "price change 24h",
    value: `market_data.price_change_percentage_24h_in_currency`,
  },
  {
    id: "price-7d",
    key: "price change 7d",
    value: `market_data.price_change_percentage_7d_in_currency`,
  },
  {
    id: "price-30d",
    key: "price change 30d",
    value: `market_data.price_change_percentage_30d_in_currency`,
  },
  {
    id: "rank",
    key: "rank",
    value: `market_cap_rank`,
  },
  {
    id: "total-volume",
    key: "total volume",
    value: `market_data.total_volume`,
  },
  {
    id: "total-supply",
    key: "total supply",
    value: `market_data.total_supply`,
  },
];

console.log(coinInfoKeys[6]["value"].endsWith("."));
