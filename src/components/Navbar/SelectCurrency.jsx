import { useTheme, withTheme } from "@mui/material/styles";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const SelectCurrency = ({ currency, handleChange }) => {
  const theme = useTheme();

  const selectStyles = {
    color: "white",
    paddingTop: "0",
    maxWidth: "5rem",
    maxHeight: "2.75rem",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.purple["A100"],
      borderWidth: ".15rem",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderWidth: ".17rem",
    },
    "&:Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderWidth: ".17rem",
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.custom.white,
    },
  };

  return (
    <FormControl sx={{ marginRight: "10px" }}>
      <Select
        value={currency}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={selectStyles}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: theme.palette.purple["A100"],
                color: "black",
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: theme.palette.purple[50],
              },
              "& .MuiMenuItem-root.Mui-selected:hover": {
                backgroundColor: theme.palette.purple[300],
                color: "white",
              },
            },
          },
        }}
      >
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"EUR"}>EUR</MenuItem>
        <MenuItem value={"CAN"}>CAN</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
