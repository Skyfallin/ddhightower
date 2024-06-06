import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import TopShadow from "./components/top-shadow";
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
    <div className="lg-min-w-740">
      <Card mx="auto" my={5} shadow={"lg"} boxShadow={"lg"}>
        <Button>
          <DateComponent dateString={date} />
        </Button>

        <TopShadow />

        <Box display={"flex"} flexDirection={"column"}>
          <Box alignSelf={"center"} paddingTop={"16px"}>
            <CoverImage title={title} slug={slug} url={coverImage.url} />
          </Box>

          <CardBody>
            <Heading as="h3" size="lg" mb={3}>
              <Link
                href={`/posts/${slug}`}
                _hover={{ textDecoration: "underline" }}
              >
                {title}
              </Link>
            </Heading>

            <Box display={"flex"} justifyContent={"space-between"}>
              <Text fontSize="lg">{excerpt}</Text>
              <Button colorScheme="purple">Read More</Button>
            </Box>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-4 mb-32">
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
