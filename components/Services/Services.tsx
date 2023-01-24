import React from "react";

import styles from "./Services.module.css";
import { Titles } from "../../assets/Titles";
import { AllServices } from "../../assets/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceContainer from "../ServiceContainer/ServiceContainer";

const Services = () => {
  return (
    <div className={styles.container} id="services">
      <SectionTitle
        title={Titles.services.title}
        description={Titles.services.description}
      />
      <div className={styles.allServices}>
        <ServiceContainer
          icon={AllServices.lead.icon}
          title={AllServices.lead.title}
          description={AllServices.lead.description}
        />
        <ServiceContainer
          icon={AllServices.fullstack.icon}
          title={AllServices.fullstack.title}
          description={AllServices.fullstack.description}
        />
        <ServiceContainer
          icon={AllServices.front.icon}
          title={AllServices.front.title}
          description={AllServices.front.description}
        />
      </div>
    </div>
  );
};

export default Services;
