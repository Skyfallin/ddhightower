import { Box } from "@chakra-ui/react";

const TopShadow = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      height="10px"
      bg="transparent"
      _before={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "10px",
        borderRadius: 5,
        boxShadow: "0 0px 20px -0px rgba(0, 0, 0, 0.15)",
        zIndex: -1,
      }}
    />
  );
};

export default TopShadow;
