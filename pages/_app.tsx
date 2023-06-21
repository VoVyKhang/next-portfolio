import '../styles/globals.css';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import EmptyLayout from '../layout/EmptyLayout';
import { AppPropsWithLayout } from '../models/common';
import { createEmotionCache, theme } from '../utils';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
