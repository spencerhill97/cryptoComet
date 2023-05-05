import { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context/GobalContext";
import axios from "axios";
import { fetchCoinHistory } from "../../../services/coinServices";
import { useParams } from "react-router-dom";
import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomTooltip";
import CustomXTick from "./CustomXTick";
import CustomYTick from "./CustomYTick";
import { getDateAndTime } from "../../../utilities/getDate";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Stack } from "@mui/material";
import HistoryButtonGroup from "./HistoryButtons/ButtonGroup";

function CoinChart() {
  const { coinId } = useParams();
  const { currency } = useGlobalContext();
  const [days, setDays] = useState(7);
  const [history, setHistory] = useState("");

  const changeDays = (day) => {
    setDays(day);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          fetchCoinHistory(coinId, days, currency)
        );
        const data = response.data.prices.map((arr) => {
          return { time: getDateAndTime(arr[0]), Price: arr[1] };
        });
        setHistory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
  }, [currency, days]);

  return (
    <Stack
      sx={{
        height: {
          xxs: "100%",
          md: "100vh",
        },
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "75px",
        marginBottom: "80px",
      }}
      spacing={2}
      component="article"
    >
      <ResponsiveContainer width="95%" height="max-content" aspect={2}>
        <AreaChart
          data={history}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend
            content={<CustomLegend days={days} />}
            verticalAlign="true"
            wrapperStyle={{ top: "-30px" }}
          />
          <XAxis
            dataKey="time"
            tick={<CustomXTick />}
            minTickGap={12}
            tickMargin={2.5}
          />
          <YAxis tick={<CustomYTick />} />
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
      <HistoryButtonGroup changeDays={changeDays} />
    </Stack>
  );
}

export default CoinChart;
