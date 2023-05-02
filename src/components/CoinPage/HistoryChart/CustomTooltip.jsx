import { useGlobalContext } from "../../../context/GobalContext";
import { insertComma } from "../../../utilities/insertComma";
import { roundNumber } from "../../../utilities/roundNumber";
import { useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

const CustomTooltip = (props) => {
  const { activeSymbol } = useGlobalContext();
  const theme = useTheme();

  const tooltipStyles = {
    "&.tooltip-parent": {
      backgroundColor: "white",
      border: "1px solid #bebebe",
      padding: "15px",
      display: "flex",
      margin: "0",
    },
    "& .tooltip": {
      fontFamily: "Latos, san-serif",
    },
    "& .tooltip.date": {
      color: theme.palette.custom.purpleFont,
      fontFamily: "Arial, sans-serif",
      fontWeight: "600",
      letterSpacing: ".03rem",
      paddingBottom: "5px",
    },
    "& .tooltip.value": {
      letterSpacing: ".03rem",
    },
    "& .tooltip.key": {
      color: theme.palette.purple[900],
      fontWeight: "900",
    },
  };

  const { payload } = props;
  return (
    <Stack className="tooltip-parent" sx={tooltipStyles}>
      {payload.map((entries, index) => {
        return (
          <Stack key={index} spacing={0.35}>
            <Typography variant="p" component="p" className="tooltip date">
              {entries.payload.time}
            </Typography>
            <Typography variant="p" component="p" className="tooltip value">
              <span className="tooltip key">Price:</span>
              {` ${activeSymbol}${insertComma(roundNumber(entries.value))}`}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default CustomTooltip;
