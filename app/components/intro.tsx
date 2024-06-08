import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box display="flex" paddingY={12}>
      <Box flex={1.5} alignSelf="center">
        <Heading
          as="h1"
          fontFamily="'Libre Baskerville', serif"
          fontSize="8xl"
          fontWeight="bold"
          letterSpacing="-4px"
        >
          D. D. Hightower
        </Heading>
      </Box>
      <Center mx="auto">
        <Divider
          borderColor="#222725"
          flex={1}
          height="114px"
          orientation="vertical"
        />
      </Center>
      <Box alignContent={"center"} flex={1} padding={4}>
        <Text>
          Explore the creative world of D. D. Hightower, a New York-based
          fantasy novelist and software developer. Dive into a collection of
          exclusive preview chapters and other exciting writing projects.
        </Text>
      </Box>
    </Box>
  );
};

export default Intro;
