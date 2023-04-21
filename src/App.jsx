import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table";

/*===========DUMMY DATA ===========*/
// import { data } from "./data";

const App = () => {
  const [currency, setCurrency] = useState("USD");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchBarReference = useRef(null);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    return;
  };

  const navigateToSearchBar = () => {
    searchBarReference.current?.scrollIntoView({ block: "start" });
  };

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const data = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        )
        .then((res) => {
          setCoins(res.data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  /*==========DUMMY DATA BELOW!============*/

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchCoins = async () => {
  //     try {
  //       const res = await data;
  //       setLoading(false);
  //       setCoins(res);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };

  //   fetchCoins();
  // }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleChange={handleChange} currency={currency} />
      <Hero coins={coins} />
      <Search searchBarReference={searchBarReference} />
      <Table coins={coins} navigateToSearchBar={navigateToSearchBar} />
    </ThemeProvider>
  );
};

export default App;
