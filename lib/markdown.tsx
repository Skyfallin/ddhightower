import { Text } from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
  contentType: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (!asset?.url) return null;

  if (asset.contentType === "application/pdf") {
    return (
      <iframe
        src={asset.url}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title={asset.description}
      />
    );
  }

  return (
    <Image
      src={asset.url}
      layout="responsive"
      width={500}
      height={500}
      alt={asset.description}
    />
  );
}

const renderOptions = (links: AssetLink): Options => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const id = node.data.target.sys.id;
      const asset = links.block.find((asset) => asset.sys.id === id);

      return <RichTextAsset id={id} assets={links.block} />;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text mb={4} whiteSpace="pre-line">
        {children}
      </Text>
    ),
  },
});

export function Markdown({ content }: { content: Content }) {
  return (
    <>
      {documentToReactComponents(
        content.json,
        renderOptions(content.links.assets)
      )}
    </>
  );
}
