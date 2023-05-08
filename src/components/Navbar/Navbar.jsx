import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SelectCurrency from "./SelectCurrency";
import LoginBtn from "./LoginBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  const navStyles = {
    "&.MuiPaper-root": {
      position: "static",
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
    <AppBar component="nav" sx={{ width: "100%", position: "relative" }}>
      <Toolbar sx={navStyles}>
        <Typography variant="h5" component="span">
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Rubik, sans-serif",
              cursor: "pointer",
            }}
            to={"/"}
          >
            Crypto Comet
          </Link>
        </Typography>
        <SelectCurrency />
        <LoginBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
