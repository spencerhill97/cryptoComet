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
import { currencies } from "./data/currencies";
import { dummyData } from "./data/dummydata";
import { FetchCoinList } from "./services/coinServices";

const App = () => {
  const [currency, setCurrency] = useState("USD");
  const [activeSymbol, setActiveSymbol] = useState("$");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchBarReference = useRef(null);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const navigateToSearchBar = () => {
    searchBarReference.current?.scrollIntoView({ block: "start" });
  };

  // const fetchCoins = async () => {
  //   try {
  //     const response = await axios.get(FetchCoinList(currency));
  //     setCoins(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchCoins();
  // }, [activeSymbol]);

  /*==========DUMMY DATA BELOW!============*/

  useEffect(() => {
    setLoading(true);
    const fetchCoins = async () => {
      try {
        const res = await dummyData;
        setLoading(false);
        setCoins(res);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const changeSymbol = () => {
      const newSymbol = currencies.filter(
        (element) => element.id === currency
      )[0].unicode;
      setActiveSymbol(newSymbol);
    };
    changeSymbol();
  }, [currency]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleChange={handleChange} currency={currency} />
      {/* <Login /> */}
      <Hero coins={coins} activeSymbol={activeSymbol} />
      <Search searchBarReference={searchBarReference} />
      <Table
        coins={coins}
        navigateToSearchBar={navigateToSearchBar}
        activeSymbol={activeSymbol}
      />
    </ThemeProvider>
  );
};

export default App;
