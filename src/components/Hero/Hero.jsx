import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Caption from "./Caption";
import Title from "./Title";
import Carousel from "./Carousel/";

const Hero = () => {
  const theme = useTheme();

  const container = {
    "&.MuiStack-root": {
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
      paddingTop: "4.5rem",
      paddingBottom: "4.5rem",
      backgroundColor: theme.palette.purple[50],
      width: "100%",
    },
  };

  return (
    <Stack component="header" spacing={2} sx={container}>
      <Title />
      <Caption />
      <Carousel />
    </Stack>
  );
};

export default Hero;
