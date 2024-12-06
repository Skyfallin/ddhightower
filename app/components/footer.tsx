import { Divider, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      alignItems={"center"}
      //   bg="green"
      color="gray.500"
      flexDirection={"column"}
      gap={8}
      mt={10}
      py={10}
      justifyContent={"center"}
    >
      <Divider borderColor={"#33302e"} opacity={0.25} />
      <Text fontSize="sm">
        © 2024 D. D. Hightower. All Rights Reserved |{" "}
        <Link href="/privacy" color="teal.400">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms" color="teal.400">
          Terms of Service
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
