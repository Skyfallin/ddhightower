// IMPORTANT: do not remove --------------------------
'use client' // react-slick uses client components
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// ---------------------------------------------------

import { Box, Flex, Spinner, VisuallyHidden, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'
import { CarouselItem } from '../types'
import ItemPreview from './item-preview'

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

/**
 * Accessible previous arrow component for the carousel.
 * Uses a button so it is keyboard-focusable and screen-reader friendly.
 */
const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <button
    type="button"
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    aria-label="Previous slide"
  >
    &#8592;
  </button>
)

/**
 * Accessible next arrow component for the carousel.
 * Uses a button so it is keyboard-focusable and screen-reader friendly.
 */
const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <button
    type="button"
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    aria-label="Next slide"
  >
    &#8594;
  </button>
)

const Carousel: React.FC<CarouselItem> = ({
  data,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 767px)')
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings: Settings = {
    dots,
    dotsClass: 'slick-dots slick-thumb',
    infinite,
    speed,
    slidesToShow: isMobile ? 1 : slidesToShow,
    slidesToScroll: isMobile ? 1 : slidesToScroll,
    customPaging: (i: number) => (
      <div
        key={i}
        style={{
          borderRadius: '50%',
          fontSize: '14px',
          padding: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '30px',
        }}
      >
        {i + 1}
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (current: number) => setCurrentSlide(current),
  }

  if (!data) {
    return (
      <Flex justifyContent={'center'}>
        <Spinner />
      </Flex>
    )
  }

  return (
    <Box
      className="slider-container"
      mb={16}
      role="region"
      aria-roledescription="carousel"
      aria-label="Content carousel"
    >
      <VisuallyHidden aria-live="polite" aria-atomic="true">
        {`Slide ${currentSlide + 1} of ${data.length}`}
      </VisuallyHidden>
      <Slider {...settings}>
        {data.map((post, index) => (
          <Box
            key={post.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${data.length}`}
          >
            <ItemPreview
              route="blog"
              title={post.title ?? ''}
              imageSrc={post.coverImage?.url ?? undefined}
              date={post.date ?? ''}
              slug={post.slug ?? ''}
              excerpt={post.excerpt ?? ''}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
