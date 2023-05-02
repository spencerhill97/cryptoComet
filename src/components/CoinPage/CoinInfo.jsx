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
import { coinInfoKeys } from "../../data/coinInfoKeys";

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
  }, [currency, coin]);

  if (loading) {
    return <Loading />;
  }

  const { name, market_cap_rank, market_data, image, description } = coin;
  return (
    <Stack
      spacing={1.25}
      sx={{
        color: "white",
        position: "static",
        textAlign: "start",
        width: {
          xxs: "100%",
          md: "35%",
        },
        padding: {
          xxs: "50px 20px 50px 20px",
          md: "30px",
        },
        height: {
          xxs: "100%",
          md: "100vh",
        },
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
        sx={{ textAlign: "center", paddingBottom: "20px" }}
      >
        {name}
      </Typography>
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
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
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
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
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
        <span
          style={{
            fontWeight: "900",
            textTransform: "capitalize",
            letterSpacing: "0",
          }}
        >
          price change 24h:{"  "}
        </span>
        {insertComma(
          market_data.price_change_percentage_24h_in_currency[currency]
        )}
        %
      </Typography>
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
        <span
          style={{
            fontWeight: "900",
            textTransform: "capitalize",
            letterSpacing: "0",
          }}
        >
          price change 7d:{"  "}
        </span>
        {insertComma(
          market_data.price_change_percentage_7d_in_currency[currency]
        )}
        %
      </Typography>
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
        <span
          style={{
            fontWeight: "900",
            textTransform: "capitalize",
            letterSpacing: "0",
          }}
        >
          price change 30d:{"  "}
        </span>
        {insertComma(
          market_data.price_change_percentage_30d_in_currency[currency]
        )}
        %
      </Typography>
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
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
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
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
      <Typography variant="h5" sx={{ letterSpacing: "0.03rem" }} component="p">
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
      {/* {description.en && (
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
      )} */}
    </Stack>
  );
};

export default CoinInfo;
