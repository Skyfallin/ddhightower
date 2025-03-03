import ContentfulImage from '@/lib/contentful-image'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'
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
    <ContentfulImage alt="Contentful Image" src={imageSrc} mb={4} width={512} />
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
