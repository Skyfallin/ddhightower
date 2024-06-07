// pages/_app.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
    Text: {
      fontSize: "sm", // Set default body font size to 'sm'
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#faebd7", // Antique white
        fontSize: "sm", // Set default body font size to 'sm'
      },
    },
  },
  fonts: {
    heading: "'Merriweather', serif",
    body: "'Libre Baskerville', serif",
  },
});

export default customTheme;
