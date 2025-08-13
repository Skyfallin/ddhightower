import { Divider, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      alignItems={'center'}
      color="gray.500"
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Divider borderColor={'#33302e'} opacity={0.25} />
      <Text fontSize="sm" py={8}>
        © 2025 D. D. Hightower. All Rights Reserved
      </Text>
    </Flex>
  )
}

export default Footer
