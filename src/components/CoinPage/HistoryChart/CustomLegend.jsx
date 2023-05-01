import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../../../context/GobalContext";
import SquareIcon from "@mui/icons-material/Square";

const CustomLegend = (props) => {
  const { currency } = useGlobalContext();
  const theme = useTheme();

  const { payload } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SquareIcon
        fontSize="small"
        style={{ marginRight: "10px", color: "#8884d8" }}
      />
      {payload.map((entry, index) => (
        <span key={index}>{`${
          entry.value
        } in ${currency.toUpperCase()} ~ 365 days`}</span>
      ))}
    </div>
  );
};

export default CustomLegend;
