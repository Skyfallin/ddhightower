import { draftMode } from "next/headers";

import { getAllBlogPosts } from "@/lib/api";
// import Intro from "./components/intro";
import { Heading } from "@chakra-ui/react";
import Carousel from "./components/carousel";
import Intro from "./components/intro";

export default async function Page() {
  const { isEnabled } = draftMode();

  // Retrieve blog posts
  const allBlogPosts = await getAllBlogPosts(isEnabled);

  // TODO: change default heading color, font
  // TODO: MIN height screen section is not accounting for navbar
  return (
    <div className="container mx-auto px-5 max-w-84rem">
      <Intro />
      <Heading>Blog</Heading>
      <Carousel
        data={allBlogPosts}
        dots={true}
        infinite={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
      />
    </div>
  );
}
