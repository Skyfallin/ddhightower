// IMPORTANT: do not remove --------------------------
'use client' // react-slick uses client components
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// ---------------------------------------------------

import { Box, Flex, Spinner, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import { CarouselItem } from '../types'
import ItemPreview from './item-preview'

const Carousel: React.FC<CarouselItem> = ({
  data,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 767px)')

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
    prevArrow: <></>,
    nextArrow: <></>,
  }

  if (!data) {
    return (
      <Flex justifyContent={'center'}>
        <Spinner />
      </Flex>
    )
  }

  return (
    <Box className="slider-container" mb={16}>
      <Slider {...settings}>
        {data.map((post) => (
          <ItemPreview
            key={post.slug}
            route="blog"
            title={post.title ?? ''}
            imageSrc={post.coverImage?.url ?? ''}
            date={post.date ?? ''}
            slug={post.slug ?? ''}
            excerpt={post.excerpt ?? ''}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
