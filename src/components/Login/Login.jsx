import { useState, useRef, useEffect } from "react";
import { Container, Box } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useTheme } from "@mui/material/styles";
import LoginTabs from "./Tabs";

const Login = ({ toggleLoginDashboard, loginDashboard }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentTab, setCurrentTab] = useState("one");
  const ref = useRef(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const theme = useTheme();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    return;
  };

  const toggleActiveTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    const clickHandler = (e) => {
      if (!ref.current.contains(e.target)) {
        toggleLoginDashboard(!loginDashboard);
      }
    };
    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  const loginDashStyles = {
    "&.MuiContainer-root": {
      position: "fixed",
      top: "0",
      left: "0",
      height: "100vh",
      minWidth: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.7)",
      zIndex: "99999",
      cursor: "pointer",
    },
    "& .MuiStack-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "custom.white",
      borderRadius: "0 0 4px 4px",
      width: "350px",
      cursor: "auto",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiButton-root.loginBtn": {
      width: "100%",
      color: "white",
      backgroundColor: theme.palette.purple[500],
      border: "1px solid" + theme.palette.purple[600],
      "&:hover": {
        backgroundColor: theme.palette.purple[300],
        border: "1px solid" + theme.palette.purple[200],
        color: theme.palette.custom.purpleFont,
      },
    },
    "& .MuiButton-root.googleBtn": {
      width: "100%",
      color: "white",
      backgroundColor: "#1a73e8",
      "&:hover": {
        backgroundColor: "#174ea6",
      },
    },
  };

  return (
    <Container sx={loginDashStyles} component="section">
      <div ref={ref}>
        <LoginTabs toggleActiveTab={toggleActiveTab} currentTab={currentTab} />
        <SignIn
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          currentTab={currentTab}
        />
        <SignUp currentTab={currentTab} />
      </div>
    </Container>
  );
};

export default Login;
