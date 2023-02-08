import Image from 'next/image';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import styles from './JobOffers.module.css';

import logoLinkedIn from '../../assets/img/linkedin.png';

import type { JobType } from '../../types/types';

type Props = {
  job: JobType
};

const JobOffer = ({ job }: Props) => (
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
    <Image
      className={styles.offerImage}
      src=""
      alt="job offer visual"
      height={200}
    />
    <p className={styles.offerDescription}>
      {job.details.substring(0, 250)}
      ...
    </p>
    <a className={styles.offerLink} href={job.linkedin}>
      <Image src={logoLinkedIn} alt="LinkedIn link" />
    </a>
  </section>
);

export default JobOffer;
