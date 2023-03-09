import { FC } from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import LogosWrapper from '../LogoWrapper/LogosWrapper';

import logoArray from '../../assets/Logos';

import styles from './SectionReferencesTechnos.module.css';

import { TitleType } from '@/types/dataTypes';

interface SectionReferencesTechnosProps {
  section: 'technos' | 'references';
  title: TitleType;
}

const SectionReferencesTechnos: FC<SectionReferencesTechnosProps> = ({
  section,
  title,
}) => (
  <section
    data-testid="sectionReferencesTechnos"
    className={styles.SectionReferencesTechnosWrapper}
    id={section}
  >
    <SectionTitle
      title={section === 'technos' ? title.title : title.title}
      description={
        section === 'technos' ? title.description : title.description
      }
    />
    <LogosWrapper
      logos={section === 'technos' ? logoArray.technos : logoArray.references}
      section={section}
    />
  </section>
);

export default SectionReferencesTechnos;
