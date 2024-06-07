// pages/_app.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#faebd7", // Antique white
      },
    },
  },
  fonts: {
    heading: "'Merriweather', serif",
    // body: "'Roboto Slab', serif",
    body: "'Libre Baskerville', serif",
  },
});

export default customTheme;
