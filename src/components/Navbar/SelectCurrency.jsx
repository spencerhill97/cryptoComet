import { useTheme, withTheme } from "@mui/material/styles";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { currencies } from "../../data/currencies";
import { useGlobalContext } from "../../context/GobalContext";

const SelectCurrency = () => {
  const { currency, handleCurrencyChange } = useGlobalContext();
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
    ul: {
      padding: "0",
    },
  };

  return (
    <FormControl sx={{ marginRight: "10px" }} component="form">
      <Select
        value={currency}
        onChange={handleCurrencyChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={selectStyles}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: theme.palette.purple[100],
                color: "black",
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: theme.palette.purple[50],
              },
              "& .MuiMenuItem-root.Mui-selected:hover": {
                backgroundColor: theme.palette.purple[100],
              },
              ul: {
                padding: "0",
              },
            },
          },
        }}
      >
        {currencies.map((currency) => {
          const { id } = currency;
          return (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
