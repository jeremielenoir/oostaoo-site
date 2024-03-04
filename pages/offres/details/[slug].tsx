import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/navoffre/NavOffre';
import styles from '../Offres.module.css';

import logoOostaoo from '../../../assets/logo-oostaoo.png';


const Details = () => (
  <>
    <Head>
      <title>Oostaoo Consulting - D&eacute;tails de l&apos;Offre d\&apos;Emploi</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Expertise et innovation en JavaScript : d&eacute;couvrez comment nos consultants sp&eacute;cialis&eacute;s peuvent dynamiser votre projet IT. Notre ESN est d&eacute;di&eacute;e à fournir des solutions avanc&eacute;es et personnalis&eacute;es en JavaScript pour tous vos besoins en d&eacute;veloppement web et mobile. Contactez-nous pour transformer vos id&eacute;es en r&eacute;alit&eacute; avec les meilleures comp&eacute;tences en JavaScript." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <body>
      <header className={styles.headerOffres}>
        <h1>D&eacute;tails de l&apos;Offre d&apos;Emploi</h1>
      </header>
      <section className={styles.jobDetails}>
        <div>
          <Image src={logoOostaoo} alt="logo Oostaoo" className={styles.joblogo2} height={150} width={200} />
        </div>
        <h2 className={styles.h2}>Titre du poste : D&eacute;veloppeur Web</h2>
        <p className={styles.p}>Entreprise : XYZ Tech Solutions</p>
        <p className={styles.p}>Localisation : Ville ABC</p>
        <p className={styles.p}>Type de contrat : CDI</p>

        <h2 className={styles.h2}>Description du poste :</h2>
        <p className={styles.p}>
          XYZ Tech Solutions recherche un d&eacute;veloppeur web passionn&eacute; pour rejoindre notre &eacute;quipe dynamique.
          Le candidat id&eacute;al aura une solide exp&eacute;rience dans le d&eacute;veloppement web, maîtrisant les technologies
          telles que HTML, CSS, JavaScript et ayant une connaissance approfondie des frameworks web modernes.
        </p>
        <h2 className={styles.h2}>Responsabilit&eacute;s :</h2>
        <ul className={styles.ul}>
          <li>D&eacute;velopper et maintenir des applications web.</li>
          <li>Collaborer avec l&apos;&eacute;quipe pour concevoir des solutions techniques efficaces.</li>
          <li>Effectuer des tests et d&eacute;boguer les applications.</li>
        </ul>
        <h2 className={styles.h2}>Exigences :</h2>
        <ul className={styles.ul}>
          <li>Baccalaur&eacute;at en informatique ou exp&eacute;rience &eacute;quivalente.</li>
          <li>Exp&eacute;rience significative dans le d&eacute;veloppement web.</li>
          <li>Maîtrise des langages de programmation web (HTML, CSS, JavaScript).</li>
        </ul>
        <br></br>
        <p className={styles.p}>Date limite de candidature : 31 janvier 2024</p>
        <p className={styles.p}>
          Adresse de contact :
          <Link className={styles.a} href="mailto:recrutement@oostaoo.com">recrutement@oostaoo.com</Link>
        </p>
      </section>
    </body>
  </>
);

export default Details;
