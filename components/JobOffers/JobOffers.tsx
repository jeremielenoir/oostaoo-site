import { FC } from 'react';

import styles from './JobOffers.module.css';
import JobOffer from './JobOffer';
import SectionTitle from '../SectionTitle/SectionTitle';
import jobs from '../../assets/jobData.ts';
import titles from '../../assets/Titles';
import type { JobType } from '../../types/types';

const JobOffers: FC = () => (
  <section className={styles.offersSection} id="offres">
    <SectionTitle
      title={titles.emplois.title}
      description={titles.emplois.description}
    />
    <div className={styles.offerList}>
      {jobs.map((job: JobType) => (
        <JobOffer key={job.id} job={job} />
      ))}
    </div>
  </section>
);

export default JobOffers;
