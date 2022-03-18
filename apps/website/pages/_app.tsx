import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { AppProps } from 'next/app';

import { theme } from '../core/theme';

import Head from 'next/head';

import '@fontsource/roboto/400.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Head>
          <title>Manuel Pacheco | Software Engineer</title>
          <link rel="icon" type="image/png" href="favicon.png" />
        </Head>

        <Component {...pageProps} />
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
}

export default CustomApp;
