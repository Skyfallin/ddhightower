import { Grid, GridItem, Heading } from '@chakra-ui/react'
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

      <Grid templateColumns={['1fr', '1fr', 'repeat(3, 1fr)']} py={4}>
        {morePosts.map((post) => (
          <GridItem>
            <ItemPreview
              key={post.slug}
              route={route}
              title={post.title}
              imageSrc={route === 'chapters' ? undefined : post.coverImage?.url} // Use stock icon for chapter cards
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </GridItem>
        ))}
      </Grid>
    </section>
  )
}

export default MoreStories
