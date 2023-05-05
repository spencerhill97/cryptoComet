import { useGlobalContext } from "../../../context/GobalContext";
import { insertComma } from "../../../utilities/insertComma";

const CustomXTick = (props) => {
  const { activeSymbol } = useGlobalContext();
  const { index, x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={"0.355em"} textAnchor="end" fill="#666">
        {activeSymbol + insertComma(payload.value)}
      </text>
    </g>
  );
};

export default CustomXTick;
