import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useGlobalContext } from "../../context/GobalContext";

const LoginBtn = () => {
  const { toggleLoginDashboard, loginDashboard } = useGlobalContext();
  const theme = useTheme();

  const loginBtn = {
    backgroundColor: theme.palette.purple[300],
    border: `1px solid ${theme.palette.purple[200]}`,
    color: theme.palette.custom.white,
    marginRight: "10px",
    "&:hover": {
      backgroundColor: theme.palette.purple["A100"],
      border: `1px solid ${theme.palette.purple[50]}`,
      color: theme.palette.custom.white,
    },
  };

  return (
    <Button
      size="large"
      sx={loginBtn}
      onClick={() => toggleLoginDashboard(!loginDashboard)}
    >
      Login
    </Button>
  );
};

export default LoginBtn;
