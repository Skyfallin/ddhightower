import { Image } from "@chakra-ui/react";
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
    <Image
      alt={`Cover Image for ${title}`}
      aspectRatio={{ base: 1 / 1, sm: "unset" }}
      src={url}
      width="100%"
      height="auto"
      maxH={"500px"}
      borderTopRadius={borderTopRadius}
      borderRadius={borderRadiusFull}
      objectFit="cover"
      cursor={slug ? "pointer" : "default"}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.024)" }}
    />
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
