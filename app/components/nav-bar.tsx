import { Button, Divider, Flex, Link, Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import SearchForm from './search-form'

interface NavLink {
  hyperlink: string
  text: string
}

const navLinks: NavLink[] = [
  {
    hyperlink: '/',
    text: 'Home',
  },
  {
    hyperlink: '/chapters',
    text: 'Sample Chapters',
  },
]

const NavBar: React.FC = () => {
  const pathName = usePathname()

  return (
    <Flex
      as="nav"
      bg="#FFF1E0"
      align="center"
      flexDirection={'column'}
      position={'relative'}
    >
      <Flex
        className="container mx-auto px-5 max-w-84rem h-full"
        justifyContent={{ base: 'space-evenly', md: 'space-evenly' }}
        py="1rem"
      >
        <Link
          href="/"
          _hover={{ textDecoration: 'none' }} // Removes underline on hover
        >
          <Text
            color={'#33302e'}
            display={{ base: 'none', md: 'block' }}
            fontSize="6xl"
            fontWeight="bold"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.25)"
          >
            D. D. Hightower
          </Text>
        </Link>

        <Flex alignItems="center" gap={{ base: 4, md: 8 }}>
          <SearchForm initialQuery={''} />
          <Button
            className="bg-text-charcoal-light hover:bg-text-white hover:text-charcoal-light border border-charcoal text-white font-bold duration-200 transition-colors mb-6 lg:mb-0"
            borderRadius="0"
            backgroundColor="#33302e"
            _hover={{ backgroundColor: 'white' }}
            my={'auto'}
          >
            Contact
          </Button>
        </Flex>
      </Flex>

      <Divider borderColor={'#33302e'} opacity={0.25} />

      <Flex
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-1px',
          width: '100%',
          height: '1px',
          backgroundColor: '#33302e',
          opacity: 0.25,
          transition: 'background-color 0.3s ease',
        }}
        fontWeight={'bold'}
        gap={4}
      >
        {navLinks.map((link, index) => {
          const isActive = pathName === link.hyperlink

          return (
            <Link
              display={'inline-block'}
              key={index}
              href={link.hyperlink}
              rel="noopener noreferrer"
              textColor={'#990f3d'}
              _hover={{ color: 'blue.600' }}
              flexShrink={0}
              position={'relative'}
              py={2}
              _after={{
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '4px',
                backgroundColor: isActive ? '#990f3d' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              {link.text}
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default NavBar
