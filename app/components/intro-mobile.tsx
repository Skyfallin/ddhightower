import { Box, Heading, Text } from "@chakra-ui/react";

const IntroMobile = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} py={8}>
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
      <Box alignSelf={"center"} flex={1} padding={4}>
        <Text fontSize={"sm"} textAlign={"center"}>
          Explore the creative world of D. D. Hightower, a New York-based
          fantasy novelist and software developer. Dive into a collection of
          exclusive preview chapters and other exciting writing projects.
        </Text>
      </Box>
    </Box>
  );
};

export default IntroMobile;
