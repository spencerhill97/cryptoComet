import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CoinPage from "./pages/CoinPage";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="coin/:coinId" element={<CoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
