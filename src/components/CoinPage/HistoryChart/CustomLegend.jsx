import { useGlobalContext } from "../../../context/GobalContext";
import SquareIcon from "@mui/icons-material/Square";
import { Typography, Stack } from "@mui/material";

const CustomLegend = (props) => {
  const { currency } = useGlobalContext();

  const { payload, days } = props;

  return (
    <Stack
      direction="row"
      sx={{
        width: {
          xxs: "90vw",
          md: "100%",
        },
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "25px",
      }}
    >
      <SquareIcon
        fontSize="small"
        style={{ marginRight: "10px", color: "#8884d8" }}
      />
      {payload.map((entry, index) => (
        <Typography fontFamily="Arial, sans-serif" variant="p" key={index}>{`${
          entry.value
        } in ${currency.toUpperCase()} ~ ${days} ${
          days === 1 ? "day" : "days"
        }`}</Typography>
      ))}
    </Stack>
  );
};

export default CustomLegend;
