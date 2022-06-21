import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
</>
  )
}

export default MyApp






const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}
