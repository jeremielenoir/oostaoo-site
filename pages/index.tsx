import { FC } from 'react';
import Head from 'next/head';

import JobOffers from '../components/JobOffers/JobOffers';
import Nav from '../components/nav/Nav';
import Services from '../components/Services/Services';
import Intro from '../components/Intro/Intro';
import HeaderHero from '../components/HeaderHero/HeaderHero';
import ContactForm from '../components/ContactForm/ContactForm';
import SectionReferencesTechnos from '../components/SectionReferencesTechnos/SectionReferencesTechnos';

import {
  IntroType,
  ServicesType,
  AllTitlesType,
  LogosArrayType,
} from '../types/dataTypes';

import styles from './Home.module.css';

interface HomeProps {
  introArray: IntroType[];
  servicesArray: ServicesType[];
  allTitles: AllTitlesType;
  logosArray: LogosArrayType;
}

const Home: FC<HomeProps> = ({
  introArray,
  servicesArray,
  allTitles,
  logosArray,
}) => (
  <>
    <Head>
      <title>Oostaoo.com - Bienvenue</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Trouvez le talent dont vous avez besoin pour vos projets numériques" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main className={styles.main}>
      <div className={styles.ghostContainer} id="accueil" />
      <HeaderHero text="Trouvez le talent dont vous avez besoin pour vos projets numériques" />
      <Intro introArray={introArray} />
      <Services servicesArray={servicesArray} title={allTitles.services} />
      <SectionReferencesTechnos
        section="technos"
        title={allTitles.technos}
        logos={logosArray.technos}
      />
      <SectionReferencesTechnos
        section="references"
        title={allTitles.references}
        logos={logosArray.references}
      />
      <JobOffers title={allTitles.emplois} />
      <HeaderHero text="Contactez-nous !" />
      <ContactForm />
    </main>
  </>
);
export default Home;

export async function getStaticProps() {
  const introData = await import('../assets/data/intro.json');
  const introArray: IntroType[] = introData.intro;

  const servicesData = await import('../assets/data/services.json');
  const servicesArray: ServicesType[] = servicesData.services;

  const titlesData = await import('../assets/data/titles.json');
  const allTitles: AllTitlesType = titlesData.titles;

  const logosData = await import('../assets/data/logos.json');
  const logosArray: LogosArrayType = logosData.logos;

  return {
    props: {
      introArray,
      servicesArray,
      allTitles,
      logosArray,
    },
  };
}
