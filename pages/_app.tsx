import { AppProps } from 'next/app';
import Head from 'next/head.js';
import '../styles/index.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ThemeProvider theme={theme}>
            <Component {...pageProps} />;
         </ThemeProvider>
      </>
   );
}
