import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Title = () => {
  const theme = useTheme();

  const header = {
    color: theme.palette.custom.black,
    fontSize: {
      xxs: "3.5rem",
      xs: "4.5rem",
      sm: "5.5rem",
      md: "7rem",
    },
  };

  const purpleSpan = {
    background: `-webkit-linear-gradient(${theme.palette.purple[900]}, ${theme.palette.purple.A100})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Typography variant="h1" component="h1" textAlign="center" sx={header}>
      Crypto <span style={purpleSpan}>Comet</span>
    </Typography>
  );
};

export default Title;
