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
        fontFamily: 'var(--font-inter)',
      },
      h2: {
        color: '#33302e',
        fontFamily: 'var(--font-inter)',
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
      baseStyle: {
        fontFamily: 'var(--font-inter)',
      },
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
    Input: {
      baseStyle: {
        field: {
          fontFamily: 'var(--font-inter)',
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: 'var(--font-inter)',
      },
    },
    Card,
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: "'Libre Baskerville', serif",
  },
  Heading: {
    baseStyle: {
      fontFamily: 'var(--font-inter)',
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
