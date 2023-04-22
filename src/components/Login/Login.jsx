import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  InputLabel,
  OutlinedInput,
  FormControl,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginDashStyles = {
    "&.MuiContainer-root": {
      height: "100vh",
      width: "100%",
      display: "grid",
      placeItems: "center",
      paddingLeft: "0",
      paddingRight: "0",
    },
    "& .MuiBox-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Container sx={loginDashStyles} component="section">
      <Box id="newUser">
        <Typography variant="subtitle1" component="p" alignSelf="start">
          Sign In
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="username"
          name="username"
          value="username"
          sx={{ marginBottom: "50px" }}
        ></TextField>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </Container>
  );
};

export default Login;
