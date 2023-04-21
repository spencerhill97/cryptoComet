import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table";
import { data } from "./data";

const App = () => {
  const [currency, setCurrency] = useState("USD");
  const [coins, setCoins] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    return;
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setCoins(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleChange={handleChange} currency={currency} />
      <Hero coins={coins} />
      <Search />
      <Table coins={coins} page={pageCount} />
    </ThemeProvider>
  );
};

export default App;
