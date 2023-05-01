import { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context/GobalContext";
import axios from "axios";
import { fetchCoinHistory } from "../../../services/coinServices";
import { useParams } from "react-router-dom";
import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomTooltip";
import { getDate } from "../../../utilities/getDate";
import { insertComma } from "../../../utilities/insertComma";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from "recharts";

function CoinChart() {
  const { coinId } = useParams();
  const { currency, activeSymbol } = useGlobalContext();
  const [history, setHistory] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          fetchCoinHistory(coinId, 90, currency)
        );
        const data = response.data.prices.map((arr) => {
          return { time: getDate(arr[0]), Price: arr[1] };
        });
        setHistory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
  }, [currency]);

  return (
    <ResponsiveContainer width="100%" height="max-content" aspect={2}>
      <AreaChart
        data={history}
        margin={{ top: 10, right: 50, left: 35, bottom: 0 }}
      >
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Legend
          content={CustomLegend}
          verticalAlign="true"
          wrapperStyle={{ top: "-30px" }}
        />
        <XAxis dataKey="time" minTickGap={22.5} tickMargin={2.5} />
        <YAxis tickFormatter={insertComma} />
        <Tooltip content={CustomTooltip} isAnimationActive={"false"} />
        <Area
          type="monotone"
          dataKey="Price"
          stroke="#36013f"
          strokeWidth={1}
          fillOpacity={1}
          fill="url(#price)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CoinChart;
