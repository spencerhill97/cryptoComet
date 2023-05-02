import CoinInfo from "../components/CoinPage/CoinInfo";
import CoinChart from "../components/CoinPage/HistoryChart";
import { Box } from "@mui/material";

const CoinPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xxs: "100%",
          md: "100vh",
        },
        display: "flex",
        flexDirection: {
          xxs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      component="section"
    >
      <CoinInfo />
      <CoinChart />
    </Box>
  );
};

export default CoinPage;
