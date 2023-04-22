import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { historicalData } from "../../data";
import { PureComponent } from "react";

const data = historicalData.prices.map((array) => {
  return { name: array[0], price: array[1] };
});
console.log(data);

const ReChartsExample = () => {
  return (
    <LineChart width={400} height={300} data={data}>
      <Legend />
      <Line
        type="monotone"
        dataKey={"price"}
        stroke="#2196f3"
        strokeWidth={3}
      />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default ReChartsExample;
