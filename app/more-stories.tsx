import { truncateText } from "@/util/text-util";
import { Box, Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import TopShadow from "./components/top-shadow";
import CoverImage from "./cover-image";

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
    <Box className="lg-min-w-740">
      <Card
        className="lg-min-w-740"
        mx="auto"
        my={5}
        shadow={"lg"}
        boxShadow={"lg"}
        borderRadius={"lg"}
        variant="outline"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: "scale(1.024)" }}
      >
        <TopShadow />

        <Box display={"flex"} flexDirection={"column"}>
          <Box className="w-full h-auto object-cover">
            <CoverImage title={title} slug={slug} url={coverImage.url} />
          </Box>

          <CardBody>
            <Link href={`/posts/${slug}`}>
              <Heading as="h3" size="lg" mb={3}>
                {title}
              </Heading>

              <Box alignItems="center" display="flex" flexDirection="column">
                <Text
                  alignSelf={"flex-start"}
                  fontSize="sm"
                  flexShrink={1}
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {truncateText(excerpt)}
                </Text>
                <Button
                  alignSelf="flex-end"
                  borderRadius={"sm"}
                  minW="100px"
                  textColor={"#faebd7"}
                  marginTop={"12px"}
                >
                  Read More
                </Button>
              </Box>
            </Link>
          </CardBody>
        </Box>
      </Card>
    </Box>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 mb-32">
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
