import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  url: string
  slug?: string
  borderRadius: 'half' | 'full'
}

export default function CoverImage({
  title,
  url,
  slug,
  borderRadius,
}: Readonly<CoverImageProps>) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      aspectRatio={{ base: 1 / 1, sm: 'unset' }}
      src={url}
      width="100%"
      height="auto"
      maxH={'500px'}
      borderRadius={'lg'}
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.024)' }}
      objectFit="cover"
      cursor={slug ? 'pointer' : 'default'}
    />
  )

  return (
    <Box className="sm:mx-0">
      {slug ? (
        <Link href={`/chapters/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </Box>
  )
}
