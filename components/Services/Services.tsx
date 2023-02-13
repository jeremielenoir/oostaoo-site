import { FC } from 'react';
import { ServiceType } from '@/types/types';

import styles from './Services.module.css';
import titles from '../../assets/Titles';
import services from '../../assets/Services';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const Services: FC = () => (
  <div className={styles.container} id="services">
    <SectionTitle
      title={titles.services.title}
      description={titles.services.description}
    />
    <div className={styles.allServices}>
      {services.map((service: ServiceType) => (
        <ServiceContainer
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
);

export default Services;
