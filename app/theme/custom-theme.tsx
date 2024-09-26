import { extendTheme } from "@chakra-ui/react";
import Card from "./card-theme";

const charcoal = "#262a33"; // Previously (#222725 - Eerie black)
const wineColor = "#990f3d"; // Previously (#823038)
const wineHoverColor = "#BA124A"; // Previously (#9B4046)

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#FFF1E0", // Old lace (previously #faebd7 - Antique white)
        fontFamily: "'Libre Baskerville', serif",
        color: "#222725", // Eerie black
      },
      // Custom scrollbar styles
      // "::-webkit-scrollbar": {
      //   width: "12px",
      //   height: "12px",
      // },
      // "::-webkit-scrollbar-thumb": {
      //   background: wineColor, // Wine color for the scroll bit
      //   borderRadius: "10px",
      //   border: "3px solid transparent",
      //   backgroundClip: "content-box",
      // },
      // "::-webkit-scrollbar-thumb:hover": {
      //   background: wineHoverColor, // Slightly lighter wine color on hover
      // },
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
          bg: wineColor, // Wine color background
          color: "#faebd7", // Antique white text color
          _hover: {
            bg: "blue.600", // Slightly lighter wine color on hover
          },
        },
        outline: {
          borderColor: wineColor, // Wine color border
          color: wineColor, // Wine color text
          _hover: {
            bg: "#f0e6dc", // Light brown on hover
          },
        },
        ghost: {
          color: wineColor, // Wine color text
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
