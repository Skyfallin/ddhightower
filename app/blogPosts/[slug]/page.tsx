import { draftMode } from "next/headers";

import Date from "../../components/date";
import MoreStories from "../../components/more-stories";
import CoverImage from "../../cover-image";

import { getAllPosts, getBlogPostAndMoreBlogPosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { Divider } from "@chakra-ui/react";

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
  const { post, morePosts } = await getBlogPostAndMoreBlogPosts(
    params.slug,
    isEnabled
  );

  return (
    <div className="container mx-auto px-5">
      <article>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage
            title={post.title}
            url={post.coverImage.url}
            borderRadius={"full"}
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden"></div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>

      <Divider borderColor="#222725" mt={8} mb={20} />

      <MoreStories morePosts={morePosts} />
    </div>
  );
}
