import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table";
import Login from "./components/Login";
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
