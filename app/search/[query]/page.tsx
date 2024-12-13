import Carousel from '@/app/components/carousel'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { Suspense } from 'react'
import SearchForm from '../../components/search-form'

// A server-side function for data fetching.
async function fetchSearchResults(query: string) {
  // Example:
  // const res = await fetch(`https://api.example.com/search?query=${query}`, { cache: 'no-store' });
  // const data = await res.json();

  // Mock data for demonstration
  return [
    { id: 1, title: `Result for "${query}" #1` },
    { id: 2, title: `Result for "${query}" #2` },
    { id: 3, title: `Result for "${query}" #3` },
  ]
}

export default async function SearchResultsPage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = params
  const results = await fetchSearchResults(query)
  const hasResults = results && results.length > 0

  return (
    <Box className="container mx-auto px-5 max-w-84rem">
      <Heading
        as={'h1'}
        fontSize={{ base: 'lg', md: '4xl' }}
        fontWeight="bold"
        letterSpacing="tighter"
        lineHeight="tight"
        // px={4}
      >
        Search Results for: "{query}"
      </Heading>
      {/* Render the client-side form */}
      <Suspense fallback={<div>Loading search form...</div>}>
        <SearchForm initialQuery={query} />
      </Suspense>

      {hasResults ? (
        <Carousel
          data={results}
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        />
      ) : (
        // <ul>
        //   {results.map((item) => (
        //     <li key={item.id}>{item.title}</li>
        //   ))}
        // </ul>
        <p>No results found.</p>
      )}

      <div style={{ marginTop: '20px' }}>
        {/* Example link to another search query */}
        <Link href="/search/another+term">Search for "another term"</Link>
      </div>
    </Box>
  )
}
