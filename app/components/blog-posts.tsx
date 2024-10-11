"use client"; // react-slick uses client components

import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogPost from "./blog-post";

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

// Sample data for the carousel
const carouselData = [
  {
    imageSrc: "/images/panel1.jpg",
    date: "October 11, 2024",
    title: "Panel One",
    excerpt: "This is the first panel of the carousel.",
  },
  {
    imageSrc: "/images/panel2.jpg",
    date: "October 12, 2024",
    title: "Panel Two",
    excerpt: "This is the second panel of the carousel.",
  },
  {
    imageSrc: "/images/panel3.jpg",
    date: "October 13, 2024",
    title: "Panel Three",
    excerpt: "This is the third panel of the carousel.",
  },
  {
    imageSrc: "/images/panel1.jpg",
    date: "October 11, 2024",
    title: "Panel 4",
    excerpt: "This is the first panel of the carousel.",
  },
  {
    imageSrc: "/images/panel2.jpg",
    date: "October 12, 2024",
    title: "Panel 5",
    excerpt: "This is the second panel of the carousel.",
  },
];

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
    <Box className="slider-container">
      <Slider {...settings}>
        {carouselData.map((post, index) => (
          <BlogPost
            imageSrc={post.imageSrc}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            key={index}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default MultipleItems;
