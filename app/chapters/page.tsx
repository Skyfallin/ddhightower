import MoreStories from '../components/more-stories'

import { getAllPosts } from '@/lib/api'
import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import Intro from '../components/intro'
import Link from 'next/link'
import { formattedDate } from '../util/formatted-date'

const HERO_SLUG = 'prologue'

function HeroPost({
  title,
  date,
  slug,
}: {
  title: string
  date: string
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
      <Link href={`/chapters/${slug}`} aria-label={title}>
        <Skeleton
          variant="shine"
          width="full"
          height={{ base: '200px', md: '384px' }}
          borderRadius="lg"
          /**
           * Soft gradient resembling paper and cream tones.
           */
          css={{
            '--start-color': 'colors.orange.100',
            '--end-color': 'colors.yellow.200',
          }}
        />
      </Link>
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
          date={heroPost.date}
          slug={heroPost.slug}
        />
      )}
      <MoreStories route="chapters" morePosts={morePosts} />
    </Box>
  )
}
