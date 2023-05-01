import { useState, useEffect } from "react";
import { getDate } from "../../utilities/getDate";
import { insertComma } from "../../utilities/insertComma";
import { roundNumber } from "../../utilities/roundNumber";
import SquareIcon from "@mui/icons-material/Square";
import { useGlobalContext } from "../../context/GobalContext";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from "recharts";
import axios from "axios";
import { fetchCoinHistory } from "../../services/coinServices";
import { useParams } from "react-router-dom";

function CoinChart() {
  const { coinId } = useParams();
  const { currency, activeSymbol } = useGlobalContext();
  const [history, setHistory] = useState("");

  const fetchHistory = async () => {
    console.log(coinId);
    try {
      const response = await axios.get(fetchCoinHistory(coinId, 90, currency));
      const data = response.data.prices.map((arr) => {
        return { time: getDate(arr[0]), price: roundNumber(arr[1]) };
      });
      setHistory(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        data={history}
        margin={{ top: 10, right: 35, left: 15, bottom: 0 }}
      >
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Legend verticalAlign="true" content={renderLegend} />
        <XAxis dataKey="time" minTickGap={22.5} tickMargin={2.5} />
        <YAxis tickFormatter={insertComma} />
        <Tooltip content={renderTooltipPayload} isAnimationActive={"false"} />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#36013f"
          strokeWidth={1}
          fillOpacity={1}
          fill="url(#price)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const renderLegend = (props) => {
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
        color="purple"
        style={{ marginRight: "10px" }}
      />
      {payload.map((entry, index) => (
        <span key={`item-${index}`}>{entry.value} ~ 365 days</span>
      ))}
    </div>
  );
};

const renderTooltipPayload = (props) => {
  const { payload } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #bebebe",
        padding: "0px 10px",
      }}
    >
      {payload.map((entries, index) => {
        return (
          <div key={index} style={{ margin: "0", fontSize: "14px" }}>
            <p style={{ paddingBottom: "0", marginBottom: "0" }}>
              {entries.payload.time}
            </p>
            <p style={{ paddingTop: "0", marginTop: "5px" }}>
              Price: {insertComma(entries.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinChart;
