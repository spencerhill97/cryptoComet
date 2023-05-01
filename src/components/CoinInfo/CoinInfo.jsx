import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../../services/coinServices";
import axios from "axios";
import CoinChart from "./CoinChart";
import { Stack } from "@mui/material";
import { useGlobalContext } from "../../context/GobalContext";
import Loading from "../Loading";
import { useTheme } from "@mui/material/styles";
import { insertComma } from "../../utilities/insertComma";

const CoinInfo = () => {
  const { currency, activeSymbol } = useGlobalContext();
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchCoin(coinId));
        setCoin(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { name, market_cap_rank, market_data, image, description } = coin;
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      width={"100%"}
      overflow="hidden"
    >
      <Stack
        spacing={0.5}
        sx={{
          color: "white",
          position: "static",
          textAlign: "start",
          width: "35%",
          padding: "20px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: theme.palette.purple[300],
        }}
      >
        <figure style={{ width: "200px", margin: "0 auto 20px auto" }}>
          <img
            style={{ objectFit: "contain", width: "100%" }}
            src={image.large}
            alt={name}
          />
        </figure>
        <h1 style={{ textAlign: "center" }}>{name}</h1>
        <h3>RANK: {market_cap_rank}</h3>
        <h3>
          CURRENT PRICE: {activeSymbol}{" "}
          {insertComma(market_data.current_price[currency])}
        </h3>
        <h3>
          MARKET CAP: {activeSymbol}{" "}
          {insertComma(market_data.market_cap[currency])}
        </h3>
        <h3 style={{}}>
          TOTAL VOLUME: {activeSymbol}{" "}
          {insertComma(market_data.total_volume[currency])}
        </h3>
        {description.en && (
          <h3 style={{ textAlign: "justify" }}>
            {" "}
            {description.en.split(".")[0] + "."}{" "}
          </h3>
        )}
      </Stack>
      <CoinChart />
    </Stack>
  );
};

export default CoinInfo;
