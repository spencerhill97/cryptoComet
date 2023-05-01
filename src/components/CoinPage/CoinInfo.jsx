import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../../services/coinServices";
import axios from "axios";
import { Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../../context/GobalContext";
import Loading from "../Loading";
import { useTheme } from "@mui/material/styles";
import { insertComma } from "../../utilities/insertComma";
import ReactHTMLParser from "react-html-parser";

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
  }, [currency]);

  if (loading) {
    return <Loading />;
  }

  const { name, market_cap_rank, market_data, image, description } = coin;
  return (
    <Stack
      spacing={0.5}
      sx={{
        color: "white",
        position: "static",
        textAlign: "start",
        width: "35%",
        padding: "20px",
        height: "100%",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.purple[400],
      }}
      component="article"
    >
      <figure style={{ width: "200px", margin: "0 auto 20px auto" }}>
        <img
          style={{ objectFit: "contain", width: "100%" }}
          src={image.large}
          alt={name}
        />
      </figure>
      <Typography variant="h3" component="h2" sx={{ textAlign: "center" }}>
        {name}
      </Typography>
      <Typography variant="subtitle2" component="p">
        RANK: {market_cap_rank}
      </Typography>
      <Typography variant="subtitle2" component="p">
        CURRENT PRICE: {activeSymbol}{" "}
        {insertComma(market_data.current_price[currency])}
      </Typography>
      <Typography variant="subtitle2" component="p">
        MARKET CAP: {activeSymbol}{" "}
        {insertComma(market_data.market_cap[currency])}
      </Typography>
      <Typography variant="subtitle2" component="p">
        TOTAL VOLUME: {activeSymbol}{" "}
        {insertComma(market_data.total_volume[currency])}
      </Typography>
      {description.en && (
        <Typography
          variant="p"
          component="p"
          style={{
            textAlign: "justify",
            lineHeight: "1.25rem",
            letterSpacing: ".02rem",
          }}
        >
          {ReactHTMLParser(description.en)}
        </Typography>
      )}
    </Stack>
  );
};

export default CoinInfo;
