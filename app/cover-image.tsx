"use client"

import { Box, Image, Skeleton } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type CoverImageProps = Readonly<{
  title: string
  url: string
  slug?: string
  zoomOnHover?: boolean
  /** Display a loading skeleton while the image loads. */
  showSkeleton?: boolean
}>

export default function CoverImage({
  title,
  url,
  slug,
  zoomOnHover = false,
  showSkeleton = false,
}: Readonly<CoverImageProps>) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement | null>(null)

  // When the image is cached, the load event may fire before the handler is attached.
  // Check the `complete` state on mount to ensure the skeleton hides appropriately.
  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true)
    }
  }, [])

  const optimizedUrl = `${'https://spellshore-web-pull.b-cdn.net/runic_map.png'}?q=${90}&fm=webp&fit=fill`
  // Shared shadow styling for both the skeleton and the image
  const imageShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)'

  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      aspectRatio={{ base: 1 / 1, sm: 'unset' }}
      src={optimizedUrl}
      width="100%"
      height="auto"
      maxH={'384px'}
      borderRadius={'lg'}
      boxShadow={imageShadow}
      transition="transform 0.2s ease-in-out"
      _hover={zoomOnHover ? { transform: 'scale(1.024)' } : undefined}
      objectFit="cover"
      cursor={slug ? 'pointer' : 'default'}
      fetchPriority="high"
      ref={imageRef}
      onLoad={() => setIsLoaded(true)}
    />
  )

  const display = showSkeleton ? (
    <Skeleton
      isLoaded={isLoaded}
      height="384px"
      width="100%"
      borderRadius="lg"
      boxShadow={imageShadow}
    >
      {image}
    </Skeleton>
  ) : (
    image
  )

  return (
    <Box className="sm:mx-0">
      {slug ? (
        <Link href={`/chapters/${slug}`} aria-label={title}>
          {display}
        </Link>
      ) : (
        display
      )}
    </Box>
  )
}
