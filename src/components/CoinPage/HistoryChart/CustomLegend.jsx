import { useTheme } from "@mui/material/styles";
import SquareIcon from "@mui/icons-material/Square";

const CustomLegend = (props) => {
  useTheme();

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
        <span key={`item-${index}`}>{entry.value} ~ 365 days</span>
      ))}
    </div>
  );
};

export default CustomLegend;
