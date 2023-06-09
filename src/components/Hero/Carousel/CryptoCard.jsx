import { useTheme } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import { useGlobalContext } from "../../../context/GobalContext";
import { Link } from "react-router-dom";

const CryptoCard = ({
  id,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const { activeSymbol, insertComma, roundNumber } = useGlobalContext();
  const theme = useTheme();

  const cardStyles = {
    backgroundColor: theme.palette.custom.white,
    maxWidth: {
      xxs: "115px",
      xs: "150px",
    },
    height: "100%",
    color: "black",
    margin: "15px auto",
    "&.MuiPaper-root": {
      paddingTop: "15px",
    },
    "& .MuiCardMedia-root": {
      margin: "0 auto",
    },
    "& .MuiCardContent-root": {
      padding: "10px auto",
    },
  };

  return (
    <Card key={id} elevation={4} sx={cardStyles}>
      <Link to={`/coin/${id}`}>
        <CardMedia
          sx={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          image={image}
          title={id}
        />
      </Link>
      <CardContent>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              textTransform: "uppercase",
              fontSize: {
                xxs: "12px",
                xs: "16px",
              },
            }}
          >
            {symbol}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "700",
              fontSize: {
                xxs: "12px",
                xs: "16px",
              },
              color:
                price_change_percentage_24h > 0
                  ? theme.palette.custom.positive
                  : theme.palette.custom.negative,
            }}
          >
            {price_change_percentage_24h}%
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.custom.purpleFont,
            fontSize: { xxs: "16px", xs: "20px" },
            textAlign: "center",
          }}
        >
          {activeSymbol}{" "}
          {(current_price > 1 && insertComma(current_price)) ||
            (String(current_price).length > 8 && roundNumber(current_price)) ||
            current_price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
