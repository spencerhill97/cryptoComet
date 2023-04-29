import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Loading from "./pages/Loading";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Search from "./pages/Search";
import Table from "./pages/Table";
import Login from "./pages/Login";
import { useGlobalContext } from "./context/GobalContext";

const App = () => {
  const { isLoading, loginDashboard } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {loginDashboard && <Login />}
      <Hero />
      <Search />
      <Table />
    </ThemeProvider>
  );
};

export default App;
