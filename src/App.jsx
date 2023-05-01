import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CoinPage from "./pages/CoinPage";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} exact />
          <Route path="coin/:coinId" element={<CoinPage />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
