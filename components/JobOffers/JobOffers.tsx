import { FC, useEffect, useState } from 'react';
import { JobType } from '@/types/types';
import JobOffer from './JobOffer';
import SectionTitle from '../SectionTitle/SectionTitle';
import jobs from '../../assets/jobData';
import titles from '../../assets/Titles';
import styles from './JobOffers.module.css';

interface Jobs {
  _id: string;
  title: string;
  description: string;
  contenu: string;
  image: string;
  status: string;
  date: Date;
}

const JobOffers: FC = (props) => {
const [jobs, setJobs] = useState<Jobs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);
  return (
  <section className={styles.offersSection} id="offres">
    <div className={styles.offerList}>
      {jobs.map((jobs: Jobs) => (
        <>
        <JobOffer key={jobs._id} job={jobs} />
        </>
      ))}
    </div>
  </section>
  );
};

export default JobOffers;
