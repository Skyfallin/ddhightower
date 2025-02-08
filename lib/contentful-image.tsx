'use client'

import { Image, ImageProps } from '@chakra-ui/react'

interface ContentfulImageProps extends ImageProps {
  src: string
  width?: number
  quality?: number
}

const optimizedImageUrl = ({ src, width, quality }: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=webp&fit=fill`
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  src,
  width,
  quality,
  ...props
}) => {
  return (
    <Image
      src={optimizedImageUrl({ src, width, quality })}
      borderRadius="lg"
      fetchPriority="high"
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.024)' }}
      outline={'none'}
      {...props}
    />
  )
}

export default ContentfulImage
