// theme.ts
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#faebd7", // Antique white
        fontFamily: "'Libre Baskerville', serif",
        color: "#222725", // Eerie black
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        backgroundColor: "#faebd7", // Antique White for Box component (used as card)
      },
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: "#faebd7", // Antique White
        },
      },
    },
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
