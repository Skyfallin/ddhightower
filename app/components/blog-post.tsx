import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type ContentProps = Readonly<{
  imageSrc: string;
  date: string;
  title: string;
  excerpt: string;
}>;

const BlogPost: React.FC<ContentProps> = ({
  imageSrc,
  date,
  title,
  excerpt,
}) => {
  return (
    <Box p={4} textAlign="center" borderRadius="md">
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
        mb={4}
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1)" // Custom shadow
      />
      <Text fontSize="sm" color="gray.500" mb={2}>
        {date}
      </Text>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{excerpt}</Text>
    </Box>
  );
};

export default BlogPost;
