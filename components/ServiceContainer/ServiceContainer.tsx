import { FC, useState } from 'react';
import { Assessment, Handyman, AssignmentInd, ExpandCircleDownOutlined } from '@mui/icons-material';

import styles from './ServiceContainer.module.css';

interface ServiceContainerProps {
   icon: string;
   title: string;
   description: string;
}

const ServiceContainer: FC<ServiceContainerProps> = ({ icon, title, description }) => {
   const [isTextHidden, setIsTextHidden] = useState<boolean>(true);

   return (
      <div className={styles.container} onClick={() => setIsTextHidden(!isTextHidden)}>
         {icon === 'lead' ? (
            <Assessment />
         ) : icon === 'full' ? (
            <Handyman />
         ) : (
            icon === 'front' && <AssignmentInd />
         )}

         <h1>{title}</h1>
         <ExpandCircleDownOutlined
            className={styles.expandIcon}
            style={{ transform: isTextHidden ? 'rotate(0)' : 'rotate(180deg)' }}
         />
         <p className={`${!isTextHidden ? styles.displayText : ''}`}>{description}</p>
      </div>
   );
};

export default ServiceContainer;
