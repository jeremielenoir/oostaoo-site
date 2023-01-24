import { FC } from 'react';

import styles from './SectionTitle.module.css';

interface TitleProps {
   title: string;
   description: string;
}

const SectionTitle: FC<TitleProps> = ({ title, description }) => {
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
         <p className={styles.description}>{description}</p>
      </div>
   );
};

export default SectionTitle;
