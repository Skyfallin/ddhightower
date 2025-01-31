import Carousel from '@/app/components/carousel'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Suspense } from 'react'
import SearchForm from '../../components/search-form'

// A server-side function for data fetching.
// TODO: replace with actual API call to Algolia
async function fetchSearchResults(query: string) {
  // Example:
  // const res = await fetch(`https://api.example.com/search?query=${query}`, { cache: 'no-store' });
  // const data = await res.json();

  // Mock data for demonstration
  return [
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #1`,
      excerpt: '',
      slug: 'test1',
    },
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #2`,
      excerpt: '',
      slug: 'test2',
    },
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #3`,
      excerpt: '',
      slug: 'test3',
    },
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #4`,
      excerpt: '',
      slug: 'test4',
    },
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #5`,
      excerpt: '',
      slug: 'test5',
    },
    {
      coverImage: {
        url: 'https://www.sciencealert.com/images/2024/10/happy_dog.jpg',
      },
      title: `Result for "${query}" #6`,
      excerpt: '',
      slug: 'test6',
    },
  ]
}

export default async function SearchResultsPage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = params
  const blogResults = await fetchSearchResults(query)
  const chapterResults = await fetchSearchResults(query)
  const hasResults = blogResults.length > 0 || chapterResults.length > 0

  return (
    <Flex
      className="container mx-auto px-5 max-w-84rem"
      flexDirection={'column'}
      gap={4}
      py={4}
    >
      <Heading
        as={'h1'}
        fontSize={{ base: 'xl', md: '4xl' }}
        fontWeight="bold"
        letterSpacing="tighter"
        lineHeight="tight"
        px={4}
      >
        Search Results for: "{query}"
      </Heading>
      {/* Render the client-side form */}
      <Suspense fallback={<div>Loading search form...</div>}>
        <Box px={4}>
          <SearchForm initialQuery={query} />
        </Box>
      </Suspense>

      {hasResults ? (
        <Flex flexDirection={'column'}>
          {blogResults.length > 0 && (
            <Heading
              as={'h1'}
              fontSize={{ base: 'lg', md: '3xl' }}
              fontWeight="bold"
              letterSpacing="tighter"
              lineHeight="tight"
              px={4}
              mt={{ base: 4, md: 8 }}
            >
              Blog
            </Heading>
          )}
          <Carousel
            data={blogResults}
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
          />
          {chapterResults.length > 0 && (
            <Heading
              as={'h1'}
              fontSize={{ base: 'lg', md: '3xl' }}
              fontWeight="bold"
              letterSpacing="tighter"
              lineHeight="tight"
              px={4}
            >
              Sample Chapters
            </Heading>
          )}
          <Carousel
            data={chapterResults}
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
          />
        </Flex>
      ) : (
        <Text px={4}>No results found.</Text>
      )}
    </Flex>
  )
}
