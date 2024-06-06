// pages/_app.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#ff3333", // Cornsilk color
      },
    },
  },
});

export default customTheme;
