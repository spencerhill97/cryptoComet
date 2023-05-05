import CoinInfo from "../components/CoinPage/CoinInfo/CoinInfo";
import CoinChart from "../components/CoinPage/HistoryChart";
import { Box } from "@mui/material";

const CoinPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: {
          xxs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "center",
      }}
      component="section"
    >
      <CoinInfo />
      <CoinChart />
    </Box>
  );
};

export default CoinPage;
