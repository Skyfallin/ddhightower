import { getAllBlogPosts } from '@/lib/api'
import { Box, Heading } from '@chakra-ui/react'
import Carousel from './components/carousel'
import Intro from './components/intro'

export default async function Page() {
  // Retrieve blog posts
  const allBlogPosts = await getAllBlogPosts(false)

  return (
    <Box bg="#f2dfce">
      <Box className="container mx-auto px-5 max-w-84rem">
        <Intro />
        <Heading
          as={'h1'}
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="bold"
          letterSpacing="tighter"
          lineHeight="tight"
          px={4}
        >
          Blog
        </Heading>
        <Carousel
          data={allBlogPosts}
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        />
      </Box>
    </Box>
  )
}
