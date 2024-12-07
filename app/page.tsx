import { draftMode } from "next/headers";

import { getAllBlogPosts } from "@/lib/api";
// import Intro from "./components/intro";
import { Box, Heading, Text } from "@chakra-ui/react";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Intro from "./components/intro";

export default async function Page() {
  const { isEnabled } = draftMode();

  // Retrieve blog posts
  const allBlogPosts = await getAllBlogPosts(isEnabled);

  if (!allBlogPosts) {
    return <Text>Loading...</Text>;
  }

  allBlogPosts.forEach(post => (
    console.log(post.title)
  ))

  // TODO: change default heading color, font
  // TODO: MIN height screen section is not accounting for navbar
  return (
    <Box>
      <Box className="container mx-auto px-5 max-w-84rem">
        <Intro />
        <Heading p={4}>Blog</Heading>
        <Carousel
          data={allBlogPosts}
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        />
      </Box>
      <Footer />
    </Box>
  );
}
