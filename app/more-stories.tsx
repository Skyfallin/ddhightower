import { Box, Card, CardBody, Heading, Link, Text } from "@chakra-ui/react";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
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
    <Card mx="auto" my={5} shadow={"lg"} boxShadow={"lg"}>
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <CardBody>
        <Heading as="h3" size="lg" mb={3}>
          <Link
            href={`/posts/${slug}`}
            _hover={{ textDecoration: "underline" }}
          >
            {title}
          </Link>
        </Heading>
        <Box mb={4}>
          <DateComponent dateString={date} />
        </Box>
        <Text fontSize="lg" mb={4}>
          {excerpt}
        </Text>
        {author && (
          <Box display="flex" alignItems="center">
            <Avatar name={author.name} picture={author.picture} />
          </Box>
        )}
      </CardBody>
    </Card>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="bg-red">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
