import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface LabelProps extends BoxProps {
  bgColor?: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  bgColor = "#A2B5CD",
  ...props
}) => {
  return (
    <Box
      background={bgColor}
      borderRadius="md"
      fontSize="sm"
      padding="6px"
      textColor="#fff"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Label;
