import { TableRow, TableCell, Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CoinRow = ({
  id,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const theme = useTheme();

  const tableRowStyles = {
    ".sharedFont": {
      fontWeight: "500",
      fontSize: {
        xxs: "14px",
        xs: "16px",
        sm: "20px",
      },
    },
  };

  return (
    <TableRow sx={tableRowStyles}>
      <TableCell
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="figure"
          sx={{
            width: {
              xxs: "50px",
              sm: "65px",
            },
            margin: "0",
            display: "grid",
            placeItems: "center",
            marginLeft: {
              md: "25px",
              lg: "35px",
            },
          }}
        >
          <Box
            component="img"
            alt={id}
            src={image}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Stack
          direction="column"
          sx={{
            paddingLeft: {
              xxs: "15px",
            },
          }}
        >
          <Typography
            className="sharedFont"
            sx={{ textTransform: "uppercase", fontWeight: "700 !important" }}
          >
            {symbol}
          </Typography>
          <Typography
            className="sharedFont"
            sx={{
              textTransform: "capitalize",
              color: theme.palette.purple[900],
            }}
          >
            {id}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell
        className="sharedFont"
        sx={{
          textAlign: "center",
          color: theme.palette.custom.grayFont,
          width: "25%",
        }}
      >
        ${current_price}
      </TableCell>
      <TableCell
        className="sharedFont"
        sx={{
          textAlign: "center",
          width: "25%",
          color:
            (price_change_percentage_24h === 0 && theme.palette.custom.black) ||
            (price_change_percentage_24h < 0 &&
              theme.palette.custom.negative) ||
            (price_change_percentage_24h > 0 && theme.palette.custom.positive),
        }}
      >
        {price_change_percentage_24h}%
      </TableCell>
      <TableCell
        className="sharedFont"
        sx={{
          textAlign: "center",
          color: theme.palette.custom.grayFont,
          width: "25%",
        }}
      >
        $31,343,903
      </TableCell>
    </TableRow>
  );
};

export default CoinRow;
