import { useContext, createContext, useState, useEffect, useRef } from "react";
import { dummyData } from "../data/dummydata";
import { currencies } from "../data/currencies";
import { insertComma } from "../utilities/insertComma";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("USD");
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
      const res = await dummyData;
      setLoading(false);
      setCoinList(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

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
    currency,
    handleCurrencyChange,
    loginDashboard,
    toggleLoginDashboard,
    activeSymbol,
    insertComma,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
