import {
  Button,
  Stack,
  InputLabel,
  FilledInput,
  FormControl,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignIn = ({
  showPassword,
  handleMouseDownPassword,
  handleClickShowPassword,
  currentTab,
}) => {
  return (
    <Box hidden={currentTab !== "one"}>
      <Stack id="newUser" spacing={1} sx={{ padding: "30px" }}>
        <TextField id="username-sign-in" label="Username" variant="filled" />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="password-sign-in"
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
          />
        </FormControl>
        <Button className="loginBtn">Sign In</Button>
        <Typography component="p" variant="subtitle1">
          OR
        </Typography>
        <Button className="googleBtn" sx={{ backgroundColor: "blue" }}>
          Sign In with Google
        </Button>
      </Stack>
    </Box>
  );
};

export default SignIn;
