import { FC, useState } from 'react';
import {
  Assessment,
  Handyman,
  AssignmentInd,
  ExpandCircleDownOutlined,
} from '@mui/icons-material';

import styles from './ServiceContainer.module.css';

interface ServiceContainerProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceContainer: FC<ServiceContainerProps> = ({
  icon,
  title,
  description,
}) => {
  const [isTextHidden, setIsTextHidden] = useState<boolean>(true);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      data-testid="service"
      className={styles.container}
      role="button"
      tabIndex={0}
      onClick={() => setIsTextHidden(!isTextHidden)}
    >
      {icon === 'lead' ? (
        <Assessment data-testid="assessment" />
      ) : icon === 'full' ? (
        <Handyman data-testid="handyman" />
      ) : icon === 'front' ? (
        <AssignmentInd data-testid="assignementInd" />
      ) : null}

      <h1 data-testid="serviceTitle">{title}</h1>
      <ExpandCircleDownOutlined
        className={styles.expandIcon}
        style={{ transform: isTextHidden ? 'rotate(0)' : 'rotate(180deg)' }}
      />
      <p
        data-testid="description"
        className={`${!isTextHidden ? styles.displayText : null}`}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceContainer;
