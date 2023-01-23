import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import { Titles } from '../../assets/Titles';

const Services = () => {
   return (
      <div>
         <SectionTitle title={Titles.services.title} description={Titles.services.description} />
         Services
      </div>
   );
};

export default Services;
