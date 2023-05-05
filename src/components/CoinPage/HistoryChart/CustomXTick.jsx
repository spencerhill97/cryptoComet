const CustomXTick = (props) => {
  const { index, x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666">
        <tspan textAnchor="middle" x="0">
          {payload.value.split(" ")[0]}
        </tspan>
        <tspan textAnchor="middle" x="0" dy="20">
          {payload.value.split(" ")[1]}
        </tspan>
      </text>
    </g>
  );
};

export default CustomXTick;
