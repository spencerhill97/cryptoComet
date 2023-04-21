import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const PoweredBy = () => {
  const theme = useTheme();

  const styles = {
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    span: {
      fontWeight: "700",
      color: theme.palette.custom.coinGecko,
    },
  };

  return (
    <Typography variant="h3" component="h2" sx={styles}>
      Powered by{" "}
      <span sx={{ color: theme.palette.custom.coinGecko, fontWeight: "700" }}>
        CoinGecko
      </span>
    </Typography>
  );
};

export default PoweredBy;
