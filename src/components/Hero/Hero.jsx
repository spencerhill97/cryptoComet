import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Caption from "./Caption";
import Title from "./Title";
import Carousel from "./Carousel/";

const Hero = ({ coins, activeSymbol }) => {
  const theme = useTheme();

  const container = {
    "&.MuiStack-root": {
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
      paddingTop: "7.5rem",
      paddingBottom: "25px",
      backgroundColor: theme.palette.purple[50],
    },
  };

  return (
    <Stack component="header" spacing={2} sx={container}>
      <Title />
      <Caption />
      <Carousel coins={coins} activeSymbol={activeSymbol} />
    </Stack>
  );
};

export default Hero;
