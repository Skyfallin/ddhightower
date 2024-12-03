// IMPORTANT: do not remove --------------------------
"use client"; // react-slick uses client components
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// ---------------------------------------------------

import { Box } from "@chakra-ui/react";
import Slider, { Settings } from "react-slick";
import BlogPost from "./blog-post";

type CarouselProps = Readonly<{
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

// Sample data for the carousel
const carouselData = [
  {
    imageSrc:
      "https://images.ctfassets.net/j40z2xmw1dqz/1H7XGkEmIhEwBKbJHDTqXU/9056dafd10eb03ce4d7d2d191d48af7b/skyfallin_Generate_a_high-quality_birds-eye_view_of_a_charming__bbc1c8b5-bb69-4bb4-8612-f9f5165265f3.png",
    date: "October 11, 2024",
    title: "Panel One",
    excerpt: "This is the first panel of the carousel.",
  },
  {
    imageSrc:
      "https://images.ctfassets.net/j40z2xmw1dqz/1H7XGkEmIhEwBKbJHDTqXU/9056dafd10eb03ce4d7d2d191d48af7b/skyfallin_Generate_a_high-quality_birds-eye_view_of_a_charming__bbc1c8b5-bb69-4bb4-8612-f9f5165265f3.png",
    date: "October 12, 2024",
    title: "Panel Two",
    excerpt: "This is the second panel of the carousel.",
  },
  {
    imageSrc:
      "https://images.ctfassets.net/j40z2xmw1dqz/1H7XGkEmIhEwBKbJHDTqXU/9056dafd10eb03ce4d7d2d191d48af7b/skyfallin_Generate_a_high-quality_birds-eye_view_of_a_charming__bbc1c8b5-bb69-4bb4-8612-f9f5165265f3.png",
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

/**
 * React-slick will dynamically inject the internal logic for navigation, but
 * these props must be passed explicitly.
 */
type ArrowProps = Readonly<{
  className: any;
  style: any;
  onClick: any;
}>;

const NextArrow = (props: ArrowProps) => {
  return (
    <div
      {...props}
      style={{
        display: "block",
        background: "red",
        borderRadius: "50%",
        right: "-25px",
      }}
    />
  );
};

const PrevArrow = (props: ArrowProps) => {
  return (
    <div
      {...props}
      style={{
        display: "block",
        background: "blue",
        borderRadius: "50%",
        left: "-25px",
      }}
    />
  );
};

const Carousel: React.FC<CarouselProps> = ({
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
}) => {
  const settings: Settings = {
    dots,
    dotsClass: "slick-dots slick-thumb",

    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    customPaging: (i: number) => (
      <div
        style={{
          fontSize: "14px",
          padding: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {i + 1} {/* Page number */}
      </div>
    ),
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
};

export default Carousel;
