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
      sx={{
        position: "relative",
        color: "white",
        textAlign: "start",
        width: {
          xxs: "100%",
          md: "35%",
        },
        justifyContent: "center",
        padding: {
          xxs: "50px 20px 50px 20px",
          md: "30px",
        },
        height: {
          md: "100vh",
        },
        overflowY: { md: "scroll" },
        msOverflowStyle: { md: "none" },
        scrollbarWidth: { md: "none" },
        "&::-webkit-scrollbar": {
          display: { md: "none" },
        },
        backgroundColor: theme.palette.purple[400],
        borderRight: "1px solid" + theme.palette.purple[600],
      }}
      component="article"
    >
      <Stack
        sx={{
          maxHeight: "100%",
          width: { xxs: "100%", sm: "400px", md: "100%" },
          margin: "0 auto",
        }}
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
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            {name}
          </Typography>
        )}
        <LinkContainer coin={coin} />
        <CoinStats coin={coin} />
        <CoinDescription coin={coin} />
      </Stack>
    </Stack>
  );
};

export default CoinInfo;
