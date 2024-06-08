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
  const borderTopRadius = borderRadius === "half" ? "lg" : undefined;
  const borderRadiusFull = borderRadius === "full" ? "lg" : undefined;

  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      src={url}
      width="100%"
      height="auto"
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
