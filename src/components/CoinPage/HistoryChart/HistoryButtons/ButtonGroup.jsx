import { ButtonGroup, Button } from "@mui/material";
import { numberOfDays } from "../../../../data/numberOfDays";

const HistoryButtonGroup = ({ changeDays }) => {
  const buttonGroupStyles = {
    "&.MuiButtonGroup-root": {
      width: {
        xxs: "90%",
        md: "75%",
      },
    },
    "& .MuiButtonBase-root": {
      width: {
        xxs: "25%",
        md: "20%",
      },
    },
  };

  return (
    <ButtonGroup sx={buttonGroupStyles} variant="contained">
      {numberOfDays.map((dayBtn) => {
        const { id, text, days } = dayBtn;
        return (
          <Button
            type="button"
            key={id}
            onClick={() => changeDays(Number(days))}
          >
            {text}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default HistoryButtonGroup;
