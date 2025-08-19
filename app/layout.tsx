import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Inter, IM_Fell_English } from 'next/font/google'
import Footer from './components/footer'
import HeaderBar from './components/header-bar'
import NavBar from './components/nav-bar'
import './globals.css'
import { metadata } from './metadata'
import customTheme from './theme/custom-theme'
import './theme/styles.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const imFell = IM_Fell_English({
  variable: '--font-im-fell',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${imFell.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ChakraProvider cssVarsRoot="body" theme={customTheme}>
          <HeaderBar />
          <NavBar />
          <Flex flexDirection={'column'}>
            {children}
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
