import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface NavLink {
  hyperlink: string;
  text: string;
}

const navLinks: NavLink[] = [
  {
    hyperlink: "/",
    text: "Home",
  },
  {
    hyperlink: "chapters",
    text: "Sample Chapters",
  },
];

const NavBar: React.FC = () => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Flex
      as="nav"
      align="center"
      borderBottom="1px solid rgba(51, 48, 46, 0.25)"
      flexDirection={"column"}
    >
      <Flex
        className="container mx-auto px-5 max-w-84rem h-full"
        justifyContent={"space-evenly"}
        padding="1rem"
      >
        <Flex align="center">
          <InputGroup width="200px">
            <InputLeftElement pointerEvents="none">
              <FaMagnifyingGlass color="#33302e" />
            </InputLeftElement>
            <Input
              borderColor={"#33302e"}
              placeholder="Search..."
              rounded="full"
              paddingLeft="2.5rem" // Add left padding to prevent text overlap
            />
          </InputGroup>
        </Flex>

        <Link
          href="/"
          _hover={{ textDecoration: "none" }} // Removes underline on hover
        >
          <Text
            color={"#33302e"}
            display={{ base: "none", md: "block" }} // Only show on larger screens
            fontFamily="'Libre Baskerville', serif"
            fontSize="6xl"
            fontWeight="bold"
          >
            D. D. Hightower
          </Text>
        </Link>

        <Button
          className="bg-text-charcoal-light hover:bg-text-white hover:text-charcoal-light border border-charcoal text-white font-bold duration-200 transition-colors mb-6 lg:mb-0"
          borderRadius="0"
          backgroundColor="#33302e"
          _hover={{ backgroundColor: "white" }}
          my={"auto"}
        >
          Contact
        </Button>
      </Flex>

      <Divider borderColor={"#33302e"} opacity={0.25} />

      <Flex fontWeight={"bold"} gap={4} py={2}>
        {navLinks.map((link, index) => {
          const isActive = pathName === link.hyperlink;

          return (
            <Link
              display={"inline-block"}
              key={index}
              href={link.hyperlink}
              rel="noopener noreferrer"
              textColor={"#990f3d"}
              _hover={{ color: "blue.600" }}
              flexShrink={0}
              textDecoration={isActive ? "underline" : "none"}
              textUnderlineOffset={"0.75rem"}
              textDecorationThickness="2px"
            >
              {link.text}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavBar;
