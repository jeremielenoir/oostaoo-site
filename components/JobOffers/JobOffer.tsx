import Image from 'next/image';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useContext } from 'react';
import { DataContext } from '@/context/context';

import { JobType } from '@/types/types';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import styles from './JobOffers.module.css';

const JobOffer = ({ job }: { job: JobType }) => {
  const { setJobApply } = useContext(DataContext);

  const handleClick = () => {
    setJobApply(job.title);
  };

  return (
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

      <Link
        to="contact"
        spy
        smooth
        isDynamic
        // offset={btnIndex === 0 ? 50 : btnIndex === lastElementIndex ? -560 : -200}
        duration={500}
      // onSetActive={() => handleClick(section)}
      >
        <Button variant="contained" className={styles.applyButton} onClick={handleClick}>
          Postuler
        </Button>
      </Link>
    </section>
  );
};
// TODO au clic, remplir la partie contact

export default JobOffer;
