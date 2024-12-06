import { draftMode } from "next/headers";

import CoverImage from "./cover-image";

import { getAllBlogPosts, getAllPosts } from "@/lib/api";
// import Intro from "./components/intro";
import { Box, Heading } from "@chakra-ui/react";
import Carousel from "./components/carousel";
import Intro from "./components/intro";

const HERO_SLUG = "prologue";

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <section>
      <Box
        className="mb-8 md:mb-16"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: "scale(1.024)" }}
      >
        <CoverImage
          title={title}
          slug={slug}
          url={coverImage.url}
          borderRadius={"full"}
        />
      </Box>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  // Retrieve posts
  const allPosts = await getAllPosts(isEnabled);
  // const heroPost = allPosts[0]; latest
  const heroPost = allPosts.find((post) => post.slug === HERO_SLUG);
  // const morePosts = allPosts.slice(1); // latest
  const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG);

  // Retrieve blog posts
  const allBlogPosts = await getAllBlogPosts(isEnabled);
  // const heroPost = allPosts[0]; latest
  // const heroPost = allPosts.find((post) => post.slug === HERO_SLUG);
  // // const morePosts = allPosts.slice(1); // latest
  // const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG);

  // TODO: change default heading color, font
  // TODO: MIN height screen section is not accounting for navbar

  return (
    <div className="container mx-auto px-5 max-w-84rem">
      <Intro />
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )} */}
      <Heading>Blog</Heading>
      <Carousel
        data={allBlogPosts}
        dots={true}
        infinite={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
      />
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
