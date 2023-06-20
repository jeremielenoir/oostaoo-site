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
      {job.details.substring(0, 250)}
      ...
    </p>

    <Button variant="contained" className={styles.applyButton}>
      Postuler
    </Button>
  </section>
);
// TODO au clic, remplir la partie contact

export default JobOffer;
