import { truncateText } from "@/app/util/text-util";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import CoverImage from "../cover-image";
import DateComponent from "./date";
import Label from "./label";
import TopShadow from "./top-shadow";

function PostPreview({
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
    <LinkBox as="article" className="lg-min-w-740">
      <Card
        borderRadius={"lg"}
        boxShadow={"lg"}
        mx="auto"
        my={4}
        shadow={"lg"}
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
            <Box
              alignItems="flex-start"
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Label>
                <DateComponent dateString={date} />
              </Label>

              <Heading as="h3" size="lg">
                <LinkOverlay href={`/posts/${slug}`}>{title}</LinkOverlay>
              </Heading>

              <Text
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
              >
                Read More
              </Button>
            </Box>
          </CardBody>
        </Box>
      </Card>
    </LinkBox>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 mb-32">
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
