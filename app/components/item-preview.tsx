import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { formattedDate } from '../util/formatted-date'

type ContentProps = Readonly<{
  route: string
  imageSrc: string
  date: string
  title: string
  excerpt: string
  slug: string
}>

const ItemPreview: React.FC<ContentProps> = ({
  route,
  imageSrc,
  date,
  title,
  excerpt,
  slug,
}) => {
  const image = (
    <Image
      src={imageSrc}
      alt={title}
      borderRadius="lg"
      mb={4}
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.024)' }}
    />
  )

  return (
    <Box p={4} textAlign="center" borderRadius="md">
      {slug ? (
        <Link href={`/${route}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}

      <Text fontSize="sm" color="gray.500" mb={2}>
        {formattedDate(date ? date : new Date().toISOString())}
      </Text>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{excerpt}</Text>
    </Box>
  )
}

export default ItemPreview
