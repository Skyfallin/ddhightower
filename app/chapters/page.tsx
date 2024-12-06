import { draftMode } from "next/headers";

import MoreStories from "../components/more-stories";
import CoverImage from "../cover-image";

import { getAllPosts } from "@/lib/api";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Intro from "../components/intro";

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
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts.find((post) => post.slug === HERO_SLUG);
  const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG);

  return (
    <Box>
      <Box className="container mx-auto px-5 max-w-84rem">
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <MoreStories morePosts={morePosts} />
      </Box>
      <Footer />
    </Box>
  );
}
