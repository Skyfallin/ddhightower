import { Image } from "@chakra-ui/react";
import Link from "next/link";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      src={url}
      width="100%"
      height="auto"
      maxH={"500px"}
      borderTopRadius="lg"
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
