import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Caption = () => {
  const theme = useTheme();
  const caption = {
    color: theme.palette.custom.grayFont,
    textAlign: "center",
    lineHeight: "1.25",
    fontFamily: "Roboto, sans-serif",
    maxWidth: {
      xxs: "20ch",
      xs: "30ch",
      sm: "40ch",
    },
  };

  return (
    <Typography variant="subtitle1" component="p" sx={caption}>
      Stay on top of your crypto game with our powerful search and tracking
      capabilities.
    </Typography>
  );
};

export default Caption;
