import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CryptoCard from "./CryptoCard";

const Carousel = ({ coins }) => {
  const theme = useTheme();
  const SM = useMediaQuery("(min-width: 600px)");
  const MD = useMediaQuery("(min-width: 900px)");
  const LG = useMediaQuery("(min-width: 1200px)");

  const settings = {
    infinite: true,
    slidesToShow: (LG && 5) || (MD && 4) || (SM ? 3 : 2),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    arrows: false,
    centerMode: SM ? true : false,
    pauseOnHover: true,
  };

  const containerStyles = {
    "&.MuiContainer-root": {
      width: "100%",
      textAlign: "center",
      paddingLeft: "0",
      paddingRight: "0",
      height: "200px",
    },
  };

  return (
    <Container className="carousel" sx={containerStyles}>
      <Slider {...settings}>
        {coins.slice(0, 20).map((coin) => {
          return <CryptoCard key={coin.id} {...coin} />;
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;
