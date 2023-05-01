import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/GobalContext";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { isLoading, loginDashboard } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar></Navbar>
      {loginDashboard && <Login />}
      <Outlet />
    </>
  );
};

export default SharedLayout;
