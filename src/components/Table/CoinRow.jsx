import { TableRow, TableCell, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CoinRow = ({
  id,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const theme = useTheme();

  return (
    <TableRow>
      <TableCell
        sx={{
          paddingLeft: "5px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={id}
          style={{ width: "50px", paddingRight: "5px" }}
        />
        {id}
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>{current_price}</TableCell>
      <TableCell
        sx={{
          textAlign: "center",
          color:
            (price_change_percentage_24h === 0 && theme.palette.custom.black) ||
            (price_change_percentage_24h < 0 &&
              theme.palette.custom.negative) ||
            (price_change_percentage_24h > 0 && theme.palette.custom.positive),
        }}
      >
        {price_change_percentage_24h}%
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>$31,343,903</TableCell>
    </TableRow>
  );
};

export default CoinRow;
