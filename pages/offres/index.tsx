import Head from 'next/head';

import Nav from '@/components/navoffre/NavOffre';

const Offres = () => (
  <>
    <Head>
      <title>Oostaoo Consulting - Bienvenue</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Expertise et innovation en JavaScript : découvrez comment nos consultants spécialisés peuvent dynamiser votre projet IT. Notre ESN est dédiée à fournir des solutions avancées et personnalisées en JavaScript pour tous vos besoins en développement web et mobile. Contactez-nous pour transformer vos idées en réalité avec les meilleures compétences en JavaScript." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
  </>
);
export default Offres;
