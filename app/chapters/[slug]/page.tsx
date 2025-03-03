import Date from '../../components/date'
import MoreStories from '../../components/more-stories'
import CoverImage from '../../cover-image'

import { getAllPosts, getPostAndMorePosts } from '@/lib/api'
import { Markdown } from '@/lib/markdown'
import { Box, Divider } from '@chakra-ui/react'

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false)

  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { item, moreItems } = await getPostAndMorePosts(params.slug, false)

  return (
    <Box bg="#FFF1E0" pt={4}>
      <Box className="container mx-auto px-5">
        <article>
          <Box className="mb-8 sm:mx-0 md:mb-16 fade-effect">
            <CoverImage title={item.title} url={item.coverImage.url} />
          </Box>
          <Box className="mx-auto max-w-2xl">
            <Box className="mb-6 block md:hidden"></Box>
            <Box className="mb-6 text-lg">
              <Date dateString={item.date} />
            </Box>
          </Box>

          <Box className="mx-auto max-w-2xl">
            <Box className="prose">
              <Markdown content={item.content} />
            </Box>
          </Box>
        </article>

        <Divider borderColor={'#33302e'} opacity={0.25} my={8} />

        <MoreStories route="chapters" morePosts={moreItems} />
      </Box>
    </Box>
  )
}
