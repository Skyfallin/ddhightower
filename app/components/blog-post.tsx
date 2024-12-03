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
    <Box
      p={4}
      textAlign="center"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      background={"salmon"}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" mb={4} />
      <Text fontSize="sm" color="gray.500" mb={2}>
        {date}
      </Text>
      <Heading size="md" mb={2}>
        {title}
        Test
      </Heading>
      <Text>{excerpt}</Text>
    </Box>
  );
};

export default BlogPost;
