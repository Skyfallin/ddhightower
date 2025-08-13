import ContentfulImage from '@/lib/contentful-image'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaBook } from 'react-icons/fa'
import { formattedDate } from '../util/formatted-date'

type ContentProps = Readonly<{
  route: string
  /**
   * Optional image source. When omitted, a book icon is rendered.
   */
  imageSrc?: string
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
  const image = imageSrc ? (
    <ContentfulImage alt="Contentful Image" src={imageSrc} mb={4} width={512} />
  ) : (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="whiteAlpha.600"
      borderRadius="lg"
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
      _hover={{ transform: 'scale(1.024)' }}
      mb={4}
      pb={8}
      pt={8}
      transition="transform 0.2s ease-in-out"
    >
      <FaBook size={300} />
    </Flex>
  )

  return (
    <Flex p={4} textAlign="center" borderRadius="md">
      <Flex flexDirection={'column'}>
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
      </Flex>
    </Flex>
  )
}

export default ItemPreview
