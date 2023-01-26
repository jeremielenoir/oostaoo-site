import styles from "./JobOffers.module.css";
import JobOffer from "./JobOffer";
import { jobs } from "./jobData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { titles } from "@/assets/Titles.js";

const JobOffers = () => {
  return (
    <section className={styles.offersSection} id="offers">
      <SectionTitle
        title={titles.emplois.title}
        description={titles.emplois.description}
      />
      <div className={styles.offerList}>
        {jobs.map((job) => (
          <JobOffer key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobOffers;
