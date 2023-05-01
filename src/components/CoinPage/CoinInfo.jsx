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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.purple[400],
        borderRight: "1px solid" + theme.palette.purple[600],
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
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        {name}
      </Typography>
      <Typography variant="h5" component="p">
        <span className="key">rank: </span>
        {market_cap_rank}
      </Typography>
      <Typography variant="h5" component="p">
        <span>current price: </span>
        {activeSymbol} {insertComma(market_data.current_price[currency])}
      </Typography>
      <Typography variant="h5" component="p">
        <span className="key">market cap: </span>
        {activeSymbol} {insertComma(market_data.market_cap[currency])}
      </Typography>
      <Typography variant="h5" component="p">
        <span className="key">total volume: </span>
        {activeSymbol} {insertComma(market_data.total_volume[currency])}
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
          {ReactHTMLParser(description.en.split(".")[0] + ".")}
        </Typography>
      )}
    </Stack>
  );
};

export default CoinInfo;
