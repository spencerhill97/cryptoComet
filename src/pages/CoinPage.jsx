import CoinInfo from "../components/CoinPage/CoinInfo";
import CoinChart from "../components/CoinPage/HistoryChart";
import { Stack } from "@mui/material";

const CoinPage = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      component="section"
    >
      <CoinInfo />
      <CoinChart />
    </Stack>
  );
};

export default CoinPage;
