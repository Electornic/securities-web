import type { AppProps } from 'next/app'
import { ThemeProvider } from "@emotion/react";

import wrapper from "../store";
import '../styles/globals.css';

const theme = {
  colors: {
    primary: 'blue'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
