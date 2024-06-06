// pages/_app.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#fffaf0", // FloralWhite color
      },
    },
  },
});

export default customTheme;
