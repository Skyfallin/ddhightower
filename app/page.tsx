import { getAllBlogPosts } from '@/lib/api'
import { HOME_PAGE_ENABLED } from '@/lib/constants'
import { Box, Heading } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import Carousel from './components/carousel'
import Intro from './components/intro'

export default async function Page() {
  if (!HOME_PAGE_ENABLED) {
    redirect('/chapters')
  }

  // Retrieve blog posts
  const allBlogPosts = await getAllBlogPosts(false)

  return (
    <Box className="container mx-auto px-5 max-w-84rem">
      <Intro />
      <Heading
        as={'h1'}
        fontSize={{ base: '4xl', md: '5xl' }}
        fontWeight="bold"
        letterSpacing="tighter"
        lineHeight="tight"
        px={4}
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.25)"
      >
        Blog
      </Heading>
      <Carousel
        data={allBlogPosts}
        dots={true}
        infinite={false}
        speed={500}
        slidesToShow={4}
        slidesToScroll={4}
      />
    </Box>
  )
}
