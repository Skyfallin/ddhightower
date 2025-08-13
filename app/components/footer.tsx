import { Divider, Flex, Link, Text } from '@chakra-ui/react'
import { socialLinks } from './header-bar'

const Footer = () => {
  return (
    <Flex
      alignItems={'center'}
      color="gray.500"
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Divider borderColor={'#33302e'} opacity={0.25} />
      <Flex gap={4} py={4}>
        {socialLinks.map((link, index) => (
          <Link
            _hover={{ color: '#FFF1E0' }}
            flexShrink={0}
            href={link.hyperlink}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.icon}
          </Link>
        ))}
      </Flex>
      <Text fontSize="sm" pb={8}>
        © 2025 D. D. Hightower. All Rights Reserved
      </Text>
    </Flex>
  )
}

export default Footer
