import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Intro = () => {
  return (
    <Flex flexDirection="column" gap={4} padding={4}>
      <Box alignSelf="center" hideFrom={'md'}>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" letterSpacing="-1px">
          D. D. Hightower
        </Heading>
      </Box>
      <Box alignContent={'center'} paddingY={{ base: '0', md: '4' }}>
        <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'}>
          Explore the creative world of D. D. Hightower, a New York-based
          fantasy novelist. Dive into a collection of exclusive preview chapters
          and other exciting writing projects.
        </Text>
      </Box>
    </Flex>
  )
}

export default Intro
