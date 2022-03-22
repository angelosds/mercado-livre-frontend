import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import { theme } from '../theme'

import GlobalStyle from '../styles/global-style'
import '../styles/fonts.css'

import LayoutTemplate from '../components/templates/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const redirectToSearch = (search: string) => {
    router.push({
      pathname: 'items',
      query: { search }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <LayoutTemplate onSearch={redirectToSearch}>
        <Component {...pageProps} />
      </LayoutTemplate>
    </ThemeProvider>
  )
}

export default MyApp
