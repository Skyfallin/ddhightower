"use client";
import { Box } from "@chakra-ui/react";
//use client if you using App router, because react-slick is client components

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red", // Customize the style here
        borderRadius: "50%",
        right: "-25px", // Adjust the position of the arrow
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue", // Customize the style here
        borderRadius: "50%",
        left: "-25px", // Adjust the position of the arrow
      }}
      onClick={onClick}
    />
  );
};

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ), // Use your custom arrow
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ), // Use your custom arrow
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Box background="saddlebrown">
          <h3>1</h3>
        </Box>
        <Box>
          <h3>2</h3>
        </Box>
        <Box>
          <h3>3</h3>
        </Box>
        <Box>
          <h3>4</h3>
        </Box>
        <Box>
          <h3>5</h3>
        </Box>
        <Box>
          <h3>6</h3>
        </Box>
        <Box>
          <h3>7</h3>
        </Box>
        <Box>
          <h3>8</h3>
        </Box>
        <Box>
          <h3>9</h3>
        </Box>
      </Slider>
    </div>
  );
}

export default MultipleItems;
