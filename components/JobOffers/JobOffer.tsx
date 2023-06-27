import Image from 'next/image';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import { JobType } from '@/types/types';
import Button from '@mui/material/Button';

import styles from './JobOffers.module.css';

const JobOffer = ({ job }: { job: JobType }) => (
  <section className={styles.offer}>
    <header className={styles.offerHeader}>
      <span className={styles.offerIconWrapper}>
        <WorkOutlineIcon
          className={styles.offerIcon}
          style={{ fill: 'white' }}
        />
      </span>
      <div>
        <h3 className={styles.offerTitle}>{job.title}</h3>
        <h3 className={styles.offerTitle}>{job.title2}</h3>
        <span className={styles.offerAvailability}>{job.status}</span>
      </div>
    </header>
    <div className={styles.offerImageWrapper}>
      <Image
        className={styles.offerImage}
        src={`/${job.image}`}
        alt="job offer visual"
        width="1000"
        height="563"
        layout="responsive"
      />
    </div>
    <p className={styles.offerDescription}>
      {job.details.substring(0, 240)}
      ...
    </p>

    <Button variant="contained" className={styles.applyButton}>
      <a href={`mailto:contact@oostaoo.com?subject=Réponse à l'offre de ${job.title}&body=Bonjour, \nJe souhaiterais prendre contact avec vous à propos du poste de ${job.title.charAt(0).toLowerCase() + job.title.slice(1)}`}>
        Postuler
      </a>
    </Button>

  </section>
);

export default JobOffer;
