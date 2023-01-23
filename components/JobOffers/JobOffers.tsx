import styles from "./JobOffers.module.css";

import Image from "next/image";

import logoLinkedIn from "../../assets/img/linkedin.png";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const JobOffers = () => {
  return (
    <section className={styles.offersSection} id="offres">
      <h2>Nos offres d'emploi</h2>
      <p>
         tout cracheux ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.
      </p>
      <div className={styles.offerList}>
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
            <Image className={styles.offerImage} src="" alt="job offer visual" height={200} />
            <p className={styles.offerDescription}>
              description description description description description description description description description description description description description description description description
            </p>
            <a className={styles.offerLink} href="#">
              <Image src={logoLinkedIn} alt="LinkedIn link" />
            </a>
        </section>
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
            <Image className={styles.offerImage} src="" alt="job offer visual" height={200} />
            <p className={styles.offerDescription}>
              description description description description description description description description description description description description description description description description
            </p>
            <a className={styles.offerLink} href="#">
              <Image src={logoLinkedIn} alt="LinkedIn link" />
            </a>
        </section>
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
            <Image className={styles.offerImage} src="" alt="job offer visual" height={200} />
            <p className={styles.offerDescription}>
              description description description description description description description description description description description description description description description description
            </p>
            <a className={styles.offerLink} href="#">
              <Image src={logoLinkedIn} alt="LinkedIn link" />
            </a>
        </section>
      </div>
    </section>
  )
}

export default JobOffers;