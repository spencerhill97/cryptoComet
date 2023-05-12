import { useEffect, useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import ReactHTMLParser from "react-html-parser";
import { useTheme } from "@mui/material/styles";

const CoinDescription = ({ coin }) => {
  const [readMore, setReadMore] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    console.log(coin.description.en);
  }, []);

  const { description } = coin;

  const descriptionStyles = {
    a: {
      color: "white",
    },
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.purple[700],
      border: `1px solid ${theme.palette.purple[500]}`,
      color: theme.palette.custom.white,
      marginTop: "20px",
      marginBottom: {
        md: "30px",
      },
      "&.hover": {
        backgroundColor: theme.palette.purple[500],
        border: `1px solid ${theme.palette.purple[400]}`,
        color: theme.palette.custom.white,
      },
    },
  };
  return (
    <Stack
      className="description-container"
      sx={descriptionStyles}
      paddingTop="10px"
      spacing={1}
    >
      {description.en && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: "900",
            textTransform: "capitalize",
            letterSpacing: "0",
          }}
          component="p"
        >
          Description:{"  "}
        </Typography>
      )}
      {description.en && (
        <Typography
          variant="p"
          sx={{
            textAlign: "justify",
            lineHeight: "1.5rem",
            letterSpacing: ".03rem",
            overflowY: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {readMore
            ? ReactHTMLParser(description.en.split(".")[0] + "...")
            : ReactHTMLParser(description.en)}
        </Typography>
      )}
      {description.en && (
        <Button type="button" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Read More" : "Read Less"}
        </Button>
      )}
    </Stack>
  );
};

export default CoinDescription;
