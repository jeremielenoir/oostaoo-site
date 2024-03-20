import Image from 'next/image';
import router from 'next/router';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import Button from '@mui/material/Button';
import styles from './JobOffers.module.css';


interface Job {
  _id: string;
  title: string;
  description: string;
  contenu: string;
  image: string;
  status: string;
  date: Date;
}

const JobOffer = ({ job }: { job: Job }) => (
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
        src={`/assets/technos/${job.image}.png`}
        alt="job offer visual"
        width={300}
        height={300}
      />
    </div>
    <p className={styles.offerDescription}>
      {job.description.substring(0, 250)}
      ...
    </p>
    <Button className={styles.offerLink} variant="contained" onClick={() => {
      router.push({
        pathname: '/offres/details/[id]',
        query: { id: job._id },
      })
    }
    }>Postuler à l&apos;offre</Button>
  </section>
);

export default JobOffer;
