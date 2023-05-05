import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SelectCurrency from "./SelectCurrency";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  const theme = useTheme();

  const navStyles = {
    "&.MuiPaper-root": {
      position: "relative",
    },
    "&.MuiToolbar-root": {
      padding: "0",
      backgroundColor: theme.palette.purple[700],
      flexGrow: "1",
      width: "100%",
      justifyContent: {
        xxs: "flex-end",
        xs: "space-between",
      },
    },
    "& .MuiTypography-root": {
      flexGrow: 1,
      marginLeft: "10px",
      fontWeight: "700",
      display: {
        xxs: "none",
        xs: "block",
      },
    },
  };

  return (
    <AppBar component="nav" sx={{ width: "100%", position: "static" }}>
      <Toolbar sx={navStyles}>
        <Typography variant="h5" component="h6">
          Crypto Comet
        </Typography>
        <SelectCurrency />
        <LoginBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
