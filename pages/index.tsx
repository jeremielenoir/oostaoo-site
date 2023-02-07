import Head from 'next/head';

import JobOffers from '@/components/JobOffers/JobOffers';
import Nav from '@/components/nav/Nav';
import Services from '@/components/Services/Services';
import styles from './Home.module.css';
import Intro from '@/components/Intro/Intro';
import HeaderHero from '@/components/HeaderHero/HeaderHero';
import ContactForm from '@/components/ContactForm/ContactForm';

import { SectionReferencesTechnos } from '@/components/SectionReferencesTechnos/SectionReferencesTechnos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oostaoo.com - Bienvenue</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.ghostContainer} id="accueil"></div>
        <HeaderHero text={'Trouvez le talent que vous cherchez'} />
        <Intro />
        <Services />
        <SectionReferencesTechnos section={'technos'} />
        <SectionReferencesTechnos section={'references'} />
        <JobOffers />
        <HeaderHero text={'Contactez-nous !'} />
        <ContactForm />
      </main>
    </>
  );
}
