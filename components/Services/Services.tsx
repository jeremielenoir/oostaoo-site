import { FC } from 'react';

import styles from './Services.module.css';
import titles from '../../assets/Titles';
import allServices from '../../assets/Services';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const Services: FC = () => (
  <div className={styles.container} id="services">
    <SectionTitle
      title={titles.services.title}
      description={titles.services.description}
    />
    <div className={styles.allServices}>
      <ServiceContainer
        icon={allServices.lead.icon}
        title={allServices.lead.title}
        description={allServices.lead.description}
      />
      <ServiceContainer
        icon={allServices.fullstack.icon}
        title={allServices.fullstack.title}
        description={allServices.fullstack.description}
      />
      <ServiceContainer
        icon={allServices.front.icon}
        title={allServices.front.title}
        description={allServices.front.description}
      />
    </div>
  </div>
);

export default Services;
