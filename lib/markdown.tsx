import { Text } from '@chakra-ui/react'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import ContentfulImage from './contentful-image'

interface Asset {
  sys: {
    id: string
  }
  url: string
  description: string
  contentType: string
}

interface AssetLink {
  block: Asset[]
}

interface Content {
  json: any
  links: {
    assets: AssetLink
  }
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string
  assets: Asset[] | undefined
}) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (!asset?.url) return null

  if (asset.contentType === 'application/pdf') {
    return (
      <iframe
        src={asset.url}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title={asset.description}
      />
    )
  }

  return (
    <ContentfulImage
      alt={asset.description}
      src={asset.url}
      width={512}
      quality={100}
    />
  )
}

const renderOptions = (links: AssetLink): Options => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const id = node.data.target.sys.id
      const asset = links.block.find((asset) => asset.sys.id === id)

      return <RichTextAsset id={id} assets={links.block} />
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      // Ensure children is always an array
      const childrenArray = Array.isArray(children) ? children : [children]
      const textContent = childrenArray
        .map((child) => (typeof child === 'string' ? child : ''))
        .join('')

      // Check for headings
      if (textContent.startsWith('## ')) {
        return <h2>{textContent.slice(3)}</h2>
      } else if (textContent.startsWith('# ')) {
        return <h1>{textContent.slice(2)}</h1>
      }

      // Check for italic text
      const parts = textContent.split(/(\*[^*]+\*)/).filter(Boolean)

      return (
        <Text mb={4} whiteSpace="pre-line">
          {parts.map((part, index) => {
            if (/^\*[^*]+\*$/.test(part)) {
              return <em key={index}>{part.slice(1, -1)}</em>
            }
            return part
          })}
        </Text>
      )
    },
  },
})

export function Markdown({ content }: { content: Content }) {
  return (
    <>
      {documentToReactComponents(
        content.json,
        renderOptions(content.links.assets)
      )}
    </>
  )
}
