// nav-bar.tsx
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

const NavBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      //   backgroundColor="gray.100"
      //   backgroundColor={"salmon"}
      flexDirection={"column"}
      gap={4}
      //   py={4}
      //   my={4}
      //   className="container mx-auto px-5 max-w-84rem h-full"
    >
      <Flex
        justifyContent={"space-evenly"}
        className="container mx-auto px-5 max-w-84rem h-full"
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
          fontSize="4xl"
          fontWeight="bold"
          //   letterSpacing="-4px"
        >
          D. D. Hightower
        </Text>

        {/* Contact Button */}
        <Button
          borderRadius="0"
          backgroundColor="blue.500"
          color="white"
          _hover={{ backgroundColor: "blue.600" }}
        >
          Contact
        </Button>
      </Flex>

      <Divider />
    </Flex>
  );
};

export default NavBar;
