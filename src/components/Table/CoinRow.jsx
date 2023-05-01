import { TableRow, TableCell, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../../context/GobalContext";

const CoinRow = ({
  id,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
}) => {
  const { activeSymbol, insertComma, roundNumber } = useGlobalContext();
  const theme = useTheme();

  const tableRowStyles = {
    ".sharedText": {
      fontWeight: "500",
      fontSize: {
        xxs: "14px",
        xs: "16px",
        sm: "18px",
      },
      textAlign: "center",
    },
    ".firstCellText": {
      textAlign: "left",
      fontSize: {
        xxs: "14px",
        xs: "16px",
        sm: "18px",
      },
    },
    img: {
      height: {
        xxs: "50px",
        sm: "65px",
      },
      width: {
        xxs: "50px",
        md: "65px",
      },
      objectFit: "cover",
    },
    td: {
      whiteSpace: "nowrap",
      padding: "16px 20px 16px 16px",
      width: "25%",
    },
    "td:first-of-type": {
      padding: {
        xxs: "16px 16px",
      },
    },
  };

  return (
    <TableRow sx={tableRowStyles}>
      <TableCell>
        <Stack direction="row" spacing={1} alignItems="center">
          <Link to={`/coin/${id}`}>
            <Box src={image} alt={id} component="img" />
          </Link>
          <Stack className="firstCellText">
            <Typography
              sx={{
                fontWeight: "700",
                textTransform: "uppercase",
                color: "purple.900",
              }}
              component="p"
            >
              {symbol}
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "custom.black",
                fontWeight: "500",
              }}
              component="p"
            >
              {id}
            </Typography>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.custom.grayFont }}
        className="sharedText"
      >
        {`${activeSymbol} ${
          (current_price > 1 && insertComma(current_price)) ||
          (String(current_price).length > 8 && roundNumber(current_price)) ||
          current_price
        }`}
      </TableCell>
      <TableCell
        sx={{
          color:
            (price_change_percentage_24h === 0 && theme.palette.custom.black) ||
            (price_change_percentage_24h < 0 &&
              theme.palette.custom.negative) ||
            (price_change_percentage_24h > 0 && theme.palette.custom.positive),
        }}
        className="sharedText"
      >
        {price_change_percentage_24h}%
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.custom.grayFont }}
        className="sharedText"
      >
        {`${activeSymbol} ${insertComma(market_cap)}`}
      </TableCell>
    </TableRow>
  );
};

export default CoinRow;
