import { FC } from 'react';

import { TitleType } from '@/types/dataTypes';

import SectionTitle from '../SectionTitle/SectionTitle';
import LogosWrapper from '../LogoWrapper/LogosWrapper';

import styles from './SectionReferencesTechnos.module.css';

interface SectionReferencesTechnosProps {
  section: 'technos' | 'references';
  title: TitleType;
  logos: string[];
}

const SectionReferencesTechnos: FC<SectionReferencesTechnosProps> = ({
  section,
  title,
  logos,
}) => (
  <section
    data-testid="sectionReferencesTechnos"
    className={styles.SectionReferencesTechnosWrapper}
    id={section}
  >
    <SectionTitle title={title.title} description={title.description} />
    <LogosWrapper logos={logos} section={section} />
  </section>
);

export default SectionReferencesTechnos;
