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
      src={url}
      width="100%"
      height="auto"
      margin="auto"
      maxW={"1360px"}
      maxH={"500px"}
      borderTopRadius={borderTopRadius}
      borderRadius={borderRadiusFull}
      objectFit="cover"
      cursor={slug ? "pointer" : "default"}
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
