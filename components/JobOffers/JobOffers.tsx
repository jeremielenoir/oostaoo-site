import styles from "./JobOffers.module.css";

import Image from "next/image";
import JobOffer from "./JobOffer";

import logoLinkedIn from "../../assets/img/linkedin.png";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import { jobs } from "./jobData";

const JobOffers = () => {
  return (
    <section className={styles.offersSection} id="offres">
      <h2>Nos offres d'emploi</h2>
      <p>
         tout cracheux ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.
      </p>
      <div className={styles.offerList}>
        {
          jobs.map(job => <JobOffer key={job.id} job={job} />)
        }
      </div>
    </section>
  )
}

export default JobOffers;