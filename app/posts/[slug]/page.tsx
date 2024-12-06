import { draftMode } from "next/headers";

import Date from "../../components/date";
import MoreStories from "../../components/more-stories";
import CoverImage from "../../cover-image";

import Footer from "@/app/components/footer";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { Box, Divider } from "@chakra-ui/react";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <Box>
      <Box className="container mx-auto px-5">
        <article>
          <Box className="mb-8 sm:mx-0 md:mb-16 mt-4 fade-effect">
            <CoverImage
              title={post.title}
              url={post.coverImage.url}
              borderRadius={"full"}
            />
          </Box>
          <Box className="mx-auto max-w-2xl">
            <Box className="mb-6 block md:hidden"></Box>
            <Box className="mb-6 text-lg">
              <Date dateString={post.date} />
            </Box>
          </Box>

          <Box className="mx-auto max-w-2xl">
            <Box className="prose">
              <Markdown content={post.content} />
            </Box>
          </Box>
        </article>

        <Divider borderColor="#222725" mt={8} mb={20} />

        <MoreStories morePosts={morePosts} />
      </Box>
      <Footer />
    </Box>
  );
}
