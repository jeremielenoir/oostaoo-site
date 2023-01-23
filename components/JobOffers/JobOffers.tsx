import styles from "./JobOffers.module.css";

import Image from "next/image";

import logoLinkedIn from "../../assets/img/linkedin.png";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const JobOffers = () => {
  return (
    <section>
      <h2>Nos offres d'emploi</h2>
      <section className={styles.offer}>
        <header className={styles.offerHeader}>
          <span className={styles.offerIconWrapper}>
            <WorkOutlineIcon className={styles.offerIcon} style={{fill: "white"}} />
          </span>
          <div>
            <h3 className={styles.offerTitle}>Dev Lead</h3>
            <span className={styles.offerAvailability}>Disponible</span>
          </div>
        </header>
          <Image className={styles.offerImage} src="" alt="job offer visual" height={250} />
          <p className={styles.offerDescription}>
            description description description description description description description description description description description description description description description description
          </p>
          <a className={styles.offerLink} href="#">
            <Image src={logoLinkedIn} alt="LinkedIn link" />
          </a>
      </section>
    </section>
  )
}

export default JobOffers;