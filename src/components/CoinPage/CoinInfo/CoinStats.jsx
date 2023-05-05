import { Typography, Stack } from "@mui/material";
import { useGlobalContext } from "../../../context/GobalContext";
import { insertComma } from "../../../utilities/insertComma";

const CoinStats = ({ coin }) => {
  const { currency, activeSymbol } = useGlobalContext();

  const { market_cap_rank, market_data, genesis_date } = coin;
  return (
    <Stack className="coin-stats" spacing={1.25}>
      {market_cap_rank && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            rank:{"  "}
          </span>
          {market_cap_rank}
        </Typography>
      )}
      {genesis_date && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            Genesis Date:{"  "}
          </span>
          {String(genesis_date).split("-")[1] +
            "/" +
            String(genesis_date).split("-")[2] +
            "/" +
            String(genesis_date).split("-")[0].slice(2)}
        </Typography>
      )}
      {market_data.current_price[currency] && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            current price:{"  "}
          </span>
          {activeSymbol}
          {insertComma(market_data.current_price[currency])}
        </Typography>
      )}
      {market_data.market_cap[currency] && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            market cap:{"  "}
          </span>
          {activeSymbol}
          {insertComma(market_data.market_cap[currency])}
        </Typography>
      )}
      {market_data.total_volume[currency] && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            total volume:{"  "}
          </span>
          {activeSymbol}
          {insertComma(market_data.total_volume[currency])}
        </Typography>
      )}
      {market_data.total_supply && (
        <Typography
          variant="h5"
          sx={{ letterSpacing: "0.03rem" }}
          component="p"
        >
          <span
            style={{
              fontWeight: "900",
              textTransform: "capitalize",
              letterSpacing: "0",
            }}
          >
            total supply:{"  "}
          </span>
          {insertComma(market_data.total_supply)}
        </Typography>
      )}
    </Stack>
  );
};

export default CoinStats;
