// IMPORTANT: do not remove --------------------------
"use client"; // react-slick uses client components
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// ---------------------------------------------------

import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Slider, { Settings } from "react-slick";
import BlogPost from "./blog-post";

type CarouselProps = Readonly<{
  /**
   * Data of entries from Contentful collection
   * TODO: add type
   */
  data: any;
  /**
   * Whether to display pagination dots.
   */
  dots: boolean;
  /**
   * Whether the carousel should infinitely loop.
   */
  infinite: boolean;
  /**
   * The speed of the animation.
   */
  speed: number;
  /**
   * How many slides to display per page.
   */
  slidesToShow: number;
  /**
   * How many slides to scroll per page.
   */
  slidesToScroll: number;
}>;

/**
 * React-slick will dynamically inject the internal logic for navigation, but
 * these props must be passed explicitly.
 */
type ArrowProps = Readonly<{
  className: any;
  style: any;
  onClick: any;
}>;

const Carousel: React.FC<CarouselProps> = ({
  data,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const settings: Settings = {
    dots,
    dotsClass: "slick-dots slick-thumb",
    infinite,
    speed,
    slidesToShow: isMobile ? 1 : slidesToShow,
    slidesToScroll: isMobile ? 1 : slidesToScroll,
    customPaging: (i: number) => (
      <div
        key={i}
        style={{
          borderRadius: "50%",
          fontSize: "14px",
          padding: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          width: "30px",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }

  // TODO: create a type for a post datum
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {data.map((post, index: number) => (
          <BlogPost
            imageSrc={post.coverImage?.url}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            key={index}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
