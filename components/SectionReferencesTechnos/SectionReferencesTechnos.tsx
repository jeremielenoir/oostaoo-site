import { FC } from 'react';

import styles from './SectionReferencesTechnos.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import LogosWrapper from '../LogoWrapper/LogosWrapper';

import titles from '../../assets/Titles';
import { SectionReferencesTechnosProps } from '@/types/types.js';
import logoArray from '../../assets/Logos';

export const SectionReferencesTechnos: FC<SectionReferencesTechnosProps> = ({
  section,
}) => (
  <section className={styles.SectionReferencesTechnosWrapper} id={section}>
    <SectionTitle
      title={
        section === 'technos' ? titles.technos.title : titles.references.title
      }
      description={
        section === 'technos'
          ? titles.technos.description
          : titles.references.description
      }
    />
    <LogosWrapper
      logos={section === 'technos' ? logoArray.technos : logoArray.references}
      section={section}
    />
  </section>
);

export default SectionReferencesTechnos;
