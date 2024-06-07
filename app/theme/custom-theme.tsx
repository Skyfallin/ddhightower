import { extendTheme } from "@chakra-ui/react";
import Card from "./card-theme";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#faebd7", // Antique white
        fontFamily: "'Libre Baskerville', serif",
        color: "#222725", // Eerie black
      },
      // Custom scrollbar styles
      "::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#823038", // Wine color for the scroll bit
        borderRadius: "10px",
        border: "3px solid transparent",
        backgroundClip: "content-box",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#9B4046", // Slightly lighter wine color on hover
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        backgroundColor: "#faebd7", // Antique White for Box component (used as card)
      },
    },
    Button: {
      variants: {
        solid: {
          bg: "#823038", // Wine color background
          color: "#faebd7", // Antique white text color
          _hover: {
            bg: "#9B4046", // Slightly lighter wine color on hover
          },
        },
        outline: {
          borderColor: "#823038", // Wine color border
          color: "#823038", // Wine color text
          _hover: {
            bg: "#f0e6dc", // Light brown on hover
          },
        },
        ghost: {
          color: "#823038", // Wine color text
          _hover: {
            bg: "#f0e6dc", // Light brown on hover
          },
        },
      },
    },
    Card,
  },
  fonts: {
    heading: "'Merriweather', serif",
    body: "'Libre Baskerville', serif",
  },
  Text: {
    baseStyle: {
      fontFamily: "'Libre Baskerville', serif", // Set default font family for Text
    },
    defaultProps: {
      size: "lg", // Set default size for Text
    },
  },
});

export default customTheme;
