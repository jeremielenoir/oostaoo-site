import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';

import '../styles/index.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Oostaoo Consulting - Bienvenue</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Expertise et innovation en JavaScript : découvrez comment nos consultants spécialisés peuvent dynamiser votre projet IT. Notre ESN est dédiée à fournir des solutions avancées et personnalisées en JavaScript pour tous vos besoins en développement web et mobile. Contactez-nous pour transformer vos idées en réalité avec les meilleures compétences en JavaScript." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
