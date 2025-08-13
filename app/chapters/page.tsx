import MoreStories from '../components/more-stories'
import CoverImage from '../cover-image'

import { getAllPosts } from '@/lib/api'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Intro from '../components/intro'
import { formattedDate } from '../util/formatted-date'

const HERO_SLUG = 'prologue'

function HeroPost({
  title,
  /**
   * URL for the hero post's cover image.
   * Uses a static stock image rather than a CMS-provided asset.
   */
  coverImageUrl,
  date,
  excerpt,
  slug,
}: {
  title: string
  coverImageUrl: string
  date: string
  excerpt: string
  slug: string
}) {
  return (
    <Flex
      flexDirection={'column'}
      gap={4}
      mb={4}
      px={4}
      py={{ base: 4, md: 0 }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '5xl' }}
        fontWeight="bold"
        letterSpacing="tighter"
        lineHeight="tight"
      >
        Read Prologue
      </Heading>
      <CoverImage
        title={title}
        slug={slug}
        url={coverImageUrl}
        zoomOnHover={true}
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
    <Box className="container mx-auto px-5 max-w-84rem">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImageUrl="/hero-chapter.jpg"
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories route="chapters" morePosts={morePosts} />
    </Box>
  )
}
