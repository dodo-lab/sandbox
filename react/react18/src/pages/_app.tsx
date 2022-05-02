import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import SideBar, {LinkItem} from 'components/SideBar';
import type {AppProps} from 'next/app';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

const linkItems: LinkItem[] = [
  {name: 'Top', link: '/'},
  {name: 'No Suspense', link: '/suspense/no-suspense'},
  {name: 'Suspense', link: '/suspense/suspense'},
];

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{display: 'flex'}}>
        <SideBar linkItems={linkItems} />
        <Box component="main" sx={{flexGrow: 1}}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
