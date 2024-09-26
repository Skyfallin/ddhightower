import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Flex flexDirection="column" paddingY={4}>
      <Box flex={1.5} alignSelf="center">
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
      {/* // TODO: smaller text size and omit top box ^ UNLESS on mobile. Then remove mobile component. */}
      <Box alignContent={"center"} flex={1} padding={4}>
        <Text size={["vs", "sm", "md"]} textAlign={"center"}>
          Explore the creative world of D. D. Hightower, a New York-based
          fantasy novelist. Dive into a collection of exclusive preview chapters
          and other exciting writing projects.
        </Text>
      </Box>
    </Flex>
  );
};

export default Intro;
