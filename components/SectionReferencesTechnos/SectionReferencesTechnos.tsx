import { FC } from 'react';

import { SectionReferencesTechnosProps } from '@/types/types';

import SectionTitle from '../SectionTitle/SectionTitle';
import LogosWrapper from '../LogoWrapper/LogosWrapper';

import titles from '../../assets/Titles';
import logoArray from '../../assets/Logos';

import styles from './SectionReferencesTechnos.module.css';

const SectionReferencesTechnos: FC<SectionReferencesTechnosProps> = ({
  section,
}) => (
  <section
    data-testid="sectionReferencesTechnos"
    className={styles.SectionReferencesTechnosWrapper}
    id={section}
  >
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
