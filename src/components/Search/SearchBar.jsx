import { TextField, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PoweredBy from "./PoweredBy";

const SearchBar = ({ searchBarReference }) => {
  const theme = useTheme();

  const searchBarStyles = {
    "&.MuiFormControl-root": {
      width: {
        xxs: "95%",
        xs: "90%",
        sm: "80%",
      },
      maxWidth: "1280px",
      paddingBottom: "35px",
      "& fieldset": {
        borderColor: theme.palette.purple["A100"],
        borderWidth: ".15rem",
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: ".17rem",
      },
    },
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "white",
      },
    },
    "&.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      outline: "white",
    },
  };

  return (
    <Stack
      ref={searchBarReference}
      sx={{
        alignItems: "center",
        paddingTop: "25px",
        backgroundColor: theme.palette.purple[700],
      }}
      spacing={2}
      component="section"
    >
      <PoweredBy />
      <TextField
        id="crypto-search"
        label="Search for Crypto Currency..."
        variant="outlined"
        sx={searchBarStyles}
        component="form"
      />
    </Stack>
  );
};

export default SearchBar;
