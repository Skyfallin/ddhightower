'use client'

import { extendTheme } from '@chakra-ui/react'
import Card from './card-theme'

const wineColor = '#990f3d' // Previously (#823038)

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#f2dfce',
        fontFamily: "'Libre Baskerville', serif",
        color: '#222725', // Eerie black
      },
      h1: {
        color: '#33302e',
      },
      h2: {
        color: '#33302e',
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        backgroundColor: '#faebd7', // Antique White for Box component (used as card)
      },
    },
    Button: {
      variants: {
        solid: {
          bg: wineColor, // Wine color background
          color: '#faebd7', // Antique white text color
          _hover: {
            bg: 'blue.600', // Slightly lighter wine color on hover
          },
        },
        outline: {
          borderColor: wineColor, // Wine color border
          color: wineColor, // Wine color text
          _hover: {
            bg: '#f0e6dc', // Light brown on hover
          },
        },
        ghost: {
          color: wineColor, // Wine color text
          _hover: {
            bg: '#f0e6dc', // Light brown on hover
          },
        },
      },
    },
    Card,
  },
  fonts: {
    heading: "'Libre Baskerville', serif",
    body: "'Libre Baskerville', serif",
  },
  Heading: {
    baseStyle: {
      fontFamily: "'Libre Baskerville', serif",
      color: '#33302e',
    },
  },
  Text: {
    baseStyle: {
      fontFamily: "'Libre Baskerville', serif", // Set default font family for Text
    },
    defaultProps: {
      size: 'lg', // Set default size for Text
    },
  },
})

export default customTheme
