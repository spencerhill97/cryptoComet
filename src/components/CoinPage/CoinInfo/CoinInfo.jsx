import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../../../services/coinServices";
import axios from "axios";
import { Stack, Typography, Box } from "@mui/material";
import { useGlobalContext } from "../../../context/GobalContext";
import Loading from "../../Loading";
import { useTheme } from "@mui/material/styles";
import LinkContainer from "./LinkContainer";
import CoinStats from "./CoinStats";
import CoinDescription from "./CoinDescription";

const CoinInfo = () => {
  const { currency } = useGlobalContext();
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

  const { name, image } = coin;
  return (
    <Stack
      spacing={1}
      sx={{
        position: "relative",
        color: "white",
        textAlign: "start",
        width: {
          xxs: "100%",
          md: "35%",
        },
        padding: {
          xxs: "50px 20px 50px 20px",
          md: "30px",
        },
        maxHeight: "100vh",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.purple[400],
        borderRight: "1px solid" + theme.palette.purple[600],
      }}
      component="article"
    >
      <Box sx={{ width: "200px", height: "200px", margin: "0 auto 0 auto" }}>
        <img
          style={{ objectFit: "contain", width: "100%" }}
          src={image.large}
          alt={name}
        />
      </Box>
      {name && (
        <Typography
          variant="h3"
          component="h2"
          fontFamily="Rubik, sans-serif"
          sx={{ textAlign: "center" }}
        >
          {name}
        </Typography>
      )}
      <LinkContainer coin={coin} />
      <CoinStats coin={coin} />
      <CoinDescription coin={coin} />
    </Stack>
  );
};

export default CoinInfo;
