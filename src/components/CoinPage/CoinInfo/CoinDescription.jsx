import { useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import ReactHTMLParser from "react-html-parser";

const CoinDescription = ({ coin }) => {
  const [readMore, setReadMore] = useState(true);

  const { description } = coin;

  const descriptionStyles = {
    "&.description-container": {
      maxHeight: {
        md: "200px",
      },
    },
    a: {
      color: "white",
    },
  };
  return (
    <Stack className="description-container" sx={descriptionStyles} spacing={1}>
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
            lineHeight: "1.25rem",
            letterSpacing: ".02rem",
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
      <Button type="button" onClick={() => setReadMore(!readMore)}>
        {readMore ? "Read More" : "Read Less"}
      </Button>
    </Stack>
  );
};

export default CoinDescription;
