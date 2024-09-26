import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface NavLink {
  hyperlink: string;
  text: string;
}

const navLinks: NavLink[] = [
  {
    hyperlink: "test",
    text: "Blog",
  },
  {
    hyperlink: "test",
    text: "Realms of Runesong",
  },
];

const NavBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      //   backgroundColor={"salmon"}
      flexDirection={"column"}
    >
      <Flex
        className="container mx-auto px-5 max-w-84rem h-full"
        justifyContent={"space-evenly"}
        padding="1rem"
      >
        {/* Search Icon and Search Bar */}
        <Flex align="center">
          <InputGroup width="200px">
            <InputLeftElement pointerEvents="none">
              <FaMagnifyingGlass color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="Search..."
              rounded="full"
              paddingLeft="2.5rem" // Add left padding to prevent text overlap
            />
          </InputGroup>
        </Flex>

        {/* Name */}
        <Text
          color={"#33302e"}
          fontFamily="'Libre Baskerville', serif"
          fontSize="6xl"
          fontWeight="bold"
        >
          D. D. Hightower
        </Text>

        {/* Contact Button */}
        <Button
          borderRadius="0"
          backgroundColor="blue.500"
          color="white"
          _hover={{ backgroundColor: "blue.600" }}
          my={"auto"}
        >
          Contact
        </Button>
      </Flex>

      <Divider borderColor={"#33302e"} opacity={0.25} />

      <Flex fontWeight={"bold"} gap={4} py={2}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            //   className="text-white hover:text-wine-hover flex-shrink-0 my-auto"
          >
            {link.text}
          </a>
        ))}
      </Flex>

      <Divider borderColor={"#33302e"} opacity={0.25} />
    </Flex>
  );
};

export default NavBar;
