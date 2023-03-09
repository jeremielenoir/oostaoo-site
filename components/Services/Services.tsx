import styles from './Services.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

import { ServicesType, TitleType } from '@/types/dataTypes';

interface ServicesProps {
  servicesArray: ServicesType[];
  title: TitleType;
}

const Services = ({ servicesArray, title }: ServicesProps) => (
  <div className={styles.container} id="services">
    <SectionTitle title={title.title} description={title.description} />
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
