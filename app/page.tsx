import { draftMode } from "next/headers";
import Link from "next/link";

import Date from "./components/date";
import MoreStories from "./components/more-stories";
import CoverImage from "./cover-image";

import { getAllPosts } from "@/lib/api";
import { Box } from "@chakra-ui/react";
import { FaThumbtack } from "react-icons/fa";
import Intro from "./components/intro";
import Label from "./components/label";
import { truncateText } from "./util/text-util";

const HERO_SLUG = "day-of-steel";

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
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <Box display="flex" gap={2}>
            <Box display="flex" alignItems="center">
              <FaThumbtack
                color="#7A8450"
                style={{ height: "100%", width: "auto" }}
              />
            </Box>
            <Label>
              <Date dateString={date} />
            </Label>
          </Box>
        </div>
        <div>
          <p className="text-lg leading-relaxed mt-4 md:mt-0 mb-4">
            {truncateText(excerpt)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  console.log(allPosts);
  // const heroPost = allPosts[0]; latest
  const heroPost = allPosts.find((post) => post.slug === HERO_SLUG);
  // const morePosts = allPosts.slice(1); // latest
  const morePosts = allPosts.filter((post) => post.slug !== HERO_SLUG);

  return (
    <div className="container mx-auto px-5">
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
