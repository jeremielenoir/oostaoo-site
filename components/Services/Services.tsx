// import { FC } from 'react';
// import { ServiceType } from '@/types/types';

import styles from './Services.module.css';
import titles from '../../assets/Titles';
// import services from '../../assets/Services';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

import { ServicesType } from '@/types/dataTypes';

interface ServicesProps {
  servicesArray: ServicesType[];
}

const Services = ({ servicesArray }: ServicesProps) => (
  <div className={styles.container} id="services">
    <SectionTitle
      title={titles.services.title}
      description={titles.services.description}
    />
    <div className={styles.allServices}>
      {servicesArray.map((service: ServicesType) => (
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
