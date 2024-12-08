import { Box, Heading } from '@chakra-ui/react'
import ItemPreview from './item-preview'

type MoreItemsProps = Readonly<{
  /**
   * The current route of the item. "blog," "chapters"
   */
  route: string
  morePosts: any[] // TODO: add data type
}>

const MoreStories: React.FC<MoreItemsProps> = ({ route, morePosts }) => {
  return (
    <section>
      <Heading
        as={'h1'}
        fontSize={{ base: '4xl', md: '7xl' }}
        fontWeight="bold"
        letterSpacing="tighter"
        lineHeight="tight"
        px={4}
      >
        More Stories
      </Heading>
      <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 mb-32">
        {morePosts.map((post) => (
          <ItemPreview
            key={post.slug}
            route={route}
            title={post.title}
            imageSrc={post.coverImage?.url}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Box>
    </section>
  )
}

export default MoreStories
