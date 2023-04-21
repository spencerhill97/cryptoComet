import img from "./bitcoin.webp";

export const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    symbol: "btc",
    image: img,
    current_price: 333000.23,
    price_change_percentage_24h: -400.23,
  });
}
