import React from "react";
import ReactDOM from "react-dom/client";
import AppContext from "./context/GobalContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
