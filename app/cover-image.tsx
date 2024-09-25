import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

interface CoverImageProps {
  title: string;
  url: string;
  slug?: string;
  borderRadius: "half" | "full";
}

export default function CoverImage({
  title,
  url,
  slug,
  borderRadius,
}: Readonly<CoverImageProps>) {
  const borderTopRadius = borderRadius === "half" ? "3xl" : undefined;
  const borderRadiusFull = borderRadius === "full" ? "3xl" : undefined;

  const image = (
    <Box
      maxW="1360px"
      maxH="492px"
      margin="auto"
      borderRadius={borderRadiusFull}
      overflow="hidden"
      aspectRatio={{ base: 1, md: 2.6 / 1 }}
    >
      <Image
        alt={`Cover Image for ${title}`}
        src={url}
        height="100%"
        width="100%"
        margin="auto"
        borderTopRadius={borderTopRadius}
        borderRadius={borderRadiusFull}
        objectFit="cover"
        cursor={slug ? "pointer" : "default"}
      />
    </Box>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
