import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import MainPage from "./pages/MainPage";
import CoinPage from "./pages/CoinPage";
import { useGlobalContext } from "./context/GobalContext";

const App = () => {
  const { isLoading, loginDashboard } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      {loginDashboard && <Login />}
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/coin/:coinId" element={<CoinPage />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
