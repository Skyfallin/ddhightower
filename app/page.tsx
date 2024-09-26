import { draftMode } from "next/headers";

import MoreStories from "./components/more-stories";
import CoverImage from "./cover-image";

import { getAllPosts } from "@/lib/api";
// import Intro from "./components/intro";
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
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          slug={slug}
          url={coverImage.url}
          borderRadius={"full"}
        />
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  // const heroPost = allPosts[0]; latest
  const heroPost = allPosts.find((post) => post.slug === HERO_SLUG);
  // const morePosts = allPosts.slice(1); // latest
  const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG);

  return (
    <div className="container mx-auto px-5 max-w-84rem">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
