import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";
import AppContext from "./context/GobalContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AppContext>
);
