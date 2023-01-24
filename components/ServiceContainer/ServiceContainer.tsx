import { FC } from 'react';
import { Icon } from '@mui/material';
import { Assessment, Handyman, AssignmentInd } from '@mui/icons-material';

import styles from './ServiceContainer.module.css';

interface ServiceContainerProps {
   icon: string;
   title: string;
   description: string;
}

const ServiceContainer: FC<ServiceContainerProps> = ({ icon, title, description }) => {
   return (
      <div className={styles.container}>
         {icon === 'lead' ? (
            <Assessment />
         ) : icon === 'full' ? (
            <Handyman />
         ) : (
            icon === 'front' && <AssignmentInd />
         )}

         <h1>{title}</h1>
         <p>{description}</p>
      </div>
   );
};

export default ServiceContainer;
