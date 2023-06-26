import { FC } from 'react';

import { TitleType } from '@/types/dataTypes';
import { JobType } from '@/types/types';

import JobOffer from './JobOffer';
import SectionTitle from '../SectionTitle/SectionTitle';
import jobs from '../../assets/jobData';

import styles from './JobOffers.module.css';

interface JobOffersProps {
  title: TitleType;
}

const JobOffers: FC<JobOffersProps> = ({ title }) => (
  <section className={styles.offersSection} id="offres">
    <SectionTitle title={title.title} description={title.description} />
    <div className={styles.offerList}>
      {jobs.map((job: JobType) => (
        <JobOffer key={job.id} job={job} />
      ))}
    </div>
  </section>
);

export default JobOffers;
