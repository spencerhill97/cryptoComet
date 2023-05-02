import { useGlobalContext } from "../../../context/GobalContext";
import SquareIcon from "@mui/icons-material/Square";
import { Typography, Stack } from "@mui/material";

const CustomLegend = (props) => {
  const { currency } = useGlobalContext();

  const { payload } = props;
  return (
    <Stack
      direction="row"
      sx={{
        width: {
          xxs: "90vw",
          md: "100%",
        },
        justifyContent: "center",
      }}
    >
      <SquareIcon
        fontSize="small"
        style={{ marginRight: "10px", color: "#8884d8" }}
      />
      {payload.map((entry, index) => (
        <Typography variant="p" key={index}>{`${
          entry.value
        } in ${currency.toUpperCase()} ~ 365 days`}</Typography>
      ))}
    </Stack>
  );
};

export default CustomLegend;
