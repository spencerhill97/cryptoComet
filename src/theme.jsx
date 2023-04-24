import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material/";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepPurple[500],
      light: colors.deepPurple[300],
      dark: colors.deepPurple[900],
    },
    secondary: {
      main: colors.cyan["A400"],
      light: colors.cyan["A200"],
      dark: colors.cyan["A700"],
    },
    custom: {
      black: "#212121",
      white: "#f9f6ee",
      grayFont: "#565b5f",
      purpleFont: "#0d0046",
      positive: "#118C4F",
      negative: "#FF3131",
      coinGecko: "#8dc647",
    },
    purple: {
      50: colors.deepPurple[50],
      100: colors.deepPurple[100],
      200: colors.deepPurple[200],
      300: colors.deepPurple[300],
      400: colors.deepPurple[400],
      500: colors.deepPurple[500],
      600: colors.deepPurple[600],
      700: colors.deepPurple[700],
      800: colors.deepPurple[800],
      900: colors.deepPurple[900],
      A100: colors.deepPurple["A100"],
      A200: colors.deepPurple["A200"],
      A400: colors.deepPurple["A400"],
      A700: colors.deepPurple["A700"],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: "Bebas Neue, sans-serif",
      fontWeight: "700",
      fontSize: "4.5rem",
    },
    subtitle1: {
      fontSize: "1.5rem",
    },
  },
  spacing: (factor) => `${1 * factor}rem`,
  breakpoints: {
    values: {
      xxs: 0,
      xs: 330,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
