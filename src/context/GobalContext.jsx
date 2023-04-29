import { useContext, createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { fetchCoinList } from "../services/coinServices";
import { currencies } from "../data/currencies";
import { insertComma } from "../utilities/insertComma";
import { roundNumber } from "../utilities/roundNumber";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [activeSymbol, setActiveSymbol] = useState("$");
  const [loginDashboard, toggleLoginDashboard] = useState(false);
  const searchBarReference = useRef(null);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const navigateToSearchBar = () => {
    searchBarReference.current?.scrollIntoView({ block: "start" });
  };

  const fetchCoins = async () => {
    try {
      const res = await axios.get(fetchCoinList(currency));
      setLoading(false);
      setCoinList(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const changeSymbol = () => {
    const newSymbol = currencies.filter((element) => element.id === currency)[0]
      .unicode;
    setActiveSymbol(newSymbol);
  };

  useEffect(() => {
    changeSymbol();
  }, [currency]);

  const value = {
    coinList,
    isLoading,
    currencies,
    currency,
    handleCurrencyChange,
    loginDashboard,
    toggleLoginDashboard,
    activeSymbol,
    insertComma,
    roundNumber,
    navigateToSearchBar,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
