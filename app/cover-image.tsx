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
      // borderRadius="full"
      objectFit="cover"
      cursor={slug ? "pointer" : "default"}
    />
    // <ContentfulImage
    //   alt={`Cover Image for ${title}`}
    //   priority
    //   width={500}
    //   height={500}
    //   className={cn("shadow-small", {
    //     "hover:shadow-medium transition-shadow duration-200": slug,
    //   })}
    //   src={url}
    // />
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
