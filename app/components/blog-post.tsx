import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

type ContentProps = Readonly<{
  imageSrc: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}>;

const formattedDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const BlogPost: React.FC<ContentProps> = ({
  imageSrc,
  date,
  title,
  excerpt,
  slug,
}) => {
  return (
    <Box p={4} textAlign="center" borderRadius="md">
      {slug ? (
        <Link href={`/blogPosts/${slug}`} aria-label={title}>
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="md"
            mb={4}
            boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
          />
        </Link>
      ) : (
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="md"
          mb={4}
          boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)"
        />
      )}

      <Text fontSize="sm" color="gray.500" mb={2}>
        {formattedDate(date)}
      </Text>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{excerpt}</Text>
    </Box>
  );
};

export default BlogPost;
