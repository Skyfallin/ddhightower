import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Flex flexDirection="column" paddingY={4}>
      <Box
        flex={1.5}
        alignSelf="center"
        display={{ base: "block", md: "none" }} // Only show on small screens
      >
        <Heading
          as="h1"
          color={"#33302e"}
          fontFamily="'Libre Baskerville', serif"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing="-1px"
        >
          D. D. Hightower
        </Heading>
      </Box>
      <Box alignContent={"center"} flex={1} padding={4}>
        <Text fontSize={["sm", "sm", "md"]} textAlign={"center"}>
          Explore the creative world of D. D. Hightower, a New York-based
          fantasy novelist. Dive into a collection of exclusive preview chapters
          and other exciting writing projects.
        </Text>
      </Box>
    </Flex>
  );
};

export default Intro;
