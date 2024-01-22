import Head from 'next/head';

import JobOffers from '@/components/JobOffers/JobOffers';
import Nav from '@/components/nav/Nav';
import Services from '@/components/Services/Services';
import Intro from '@/components/Intro/Intro';
import HeaderHero from '@/components/HeaderHero/HeaderHero';
import ContactForm from '@/components/ContactForm/ContactForm';

import SectionReferencesTechnos from '@/components/SectionReferencesTechnos/SectionReferencesTechnos';
import styles from './Home.module.css';

const Home = () => (
  <>
    <Head>
      <title>Oostaoo Consulting - Bienvenue</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Expertise et innovation en JavaScript : découvrez comment nos consultants spécialisés peuvent dynamiser votre projet IT. Notre ESN est dédiée à fournir des solutions avancées et personnalisées en JavaScript pour tous vos besoins en développement web et mobile. Contactez-nous pour transformer vos idées en réalité avec les meilleures compétences en JavaScript." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main className={styles.main}>
      <div className={styles.ghostContainer} id="accueil" />
      <HeaderHero text="Trouvez le talent que vous cherchez" />
      <Intro />
      <Services />
      <SectionReferencesTechnos section="technos" />
      <SectionReferencesTechnos section="references" />
      <JobOffers />
      <HeaderHero text="Contactez-nous !" />
      <ContactForm />
    </main>
  </>
);

export default Home;
