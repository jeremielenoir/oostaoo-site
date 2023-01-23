import { FC } from 'react';

import styles from './ServiceContainer.module.css';

interface ServiceContainerProps {
   icon: string;
   title: string;
   description: string;
}

const ServiceContainer: FC<ServiceContainerProps> = ({ icon, title, description }) => {
   return (
      <div className={styles.container}>
         <p>{icon}</p>
         <h1>{title}</h1>
         <p>{description}</p>
      </div>
   );
};

export default ServiceContainer;
