import { ButtonGroup, Button } from "@mui/material";

const HistoryButtonGroup = () => {
  const buttonGroupStyles = {
    "&.MuiButtonGroup-root": {
      width: "75%",
    },
    "& .MuiButtonBase-root": {
      width: "25%",
    },
  };

  return (
    <ButtonGroup sx={buttonGroupStyles} variant="contained">
      <Button width="25%">7 days</Button>
      <Button width="25%">30 days</Button>
      <Button width="25%">90 days</Button>
      <Button width="25%">365 days</Button>
    </ButtonGroup>
  );
};

export default HistoryButtonGroup;
