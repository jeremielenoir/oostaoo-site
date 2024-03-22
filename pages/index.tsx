import JobOffers from '@/components/JobOffers/JobOffers';
import Nav from '@/components/nav/Nav';
import Services from '@/components/Services/Services';
import Intro from '@/components/Intro/Intro';
import HeaderHero from '@/components/HeaderHero/HeaderHero';
import ContactForm from '@/components/ContactForm/ContactForm';

import SectionReferencesTechnos from '@/components/SectionReferencesTechnos/SectionReferencesTechnos';
import styles from './Home.module.css';
import { isDatabaseConnected } from './api/utils/connectDB';
export async function getServerSideProps() {
  const isConnected = await isDatabaseConnected();
  return {
    props: {
      isConnected,
    },
  };
}
const Home = ({ isConnected }) => {
  if (!isConnected) {
    return <div>Database connection is not available. Please try again later.</div>;
  }
  return (
    <>
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
}


export default Home;
