import MoreStories from '../components/more-stories'
import CoverImage from '../cover-image'

import { getAllPosts } from '@/lib/api'
import { Box, Flex, Text } from '@chakra-ui/react'
import Intro from '../components/intro'
import { formattedDate } from '../util/formatted-date'

const HERO_SLUG = 'prologue'

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  slug: string
}) {
  return (
    <Flex flexDirection={'column'} gap={4} mb={4} px={4}>
      <CoverImage
        title={title}
        slug={slug}
        url={coverImage.url}
        borderRadius={'full'}
      />
      <Text fontSize="md" color="gray.500" mb={2}>
        {formattedDate(date)}
      </Text>
    </Flex>
  )
}

export default async function Page() {
  const allPosts = await getAllPosts(false)
  const heroPost = allPosts.find((post) => post.slug === HERO_SLUG)
  const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG)

  return (
    <Box bg="#f2dfce">
      <Box className="container mx-auto px-5 max-w-84rem">
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <MoreStories route="chapters" morePosts={morePosts} />
      </Box>
    </Box>
  )
}
