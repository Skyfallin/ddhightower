import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

type CoverImageProps = Readonly<{
  title: string
  url: string
  slug?: string
  zoomOnHover?: boolean
}>

export default function CoverImage({
  title,
  url,
  slug,
  zoomOnHover = false,
}: Readonly<CoverImageProps>) {
  const optimizedUrl = `${'https://spellshore-web-pull.b-cdn.net/runic_map.png'}?q=${90}&fm=webp&fit=fill`

  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      aspectRatio={{ base: 1 / 1, sm: 'unset' }}
      src={optimizedUrl}
      width="100%"
      height="auto"
      maxH={'384px'}
      borderRadius={'lg'}
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s ease-in-out"
      _hover={zoomOnHover ? { transform: 'scale(1.024)' } : undefined}
      objectFit="cover"
      cursor={slug ? 'pointer' : 'default'}
      fetchPriority="high"
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
