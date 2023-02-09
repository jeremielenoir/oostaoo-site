import { FC } from 'react';
import Image from 'next/image';

import styles from './LogosWrapper.module.css';

interface PropsLogosWrapper {
  logos: string[];
  section: 'technos' | 'references';
}
const LogosWrapper: FC<PropsLogosWrapper> = ({ logos, section }) => (
  <div data-testid="logosWrapper" className={styles.logosWrapper}>
    {logos.map((logo) => (
      <Image
        className={styles.logoContainer}
        key={logo}
        src={`/../public/assets/${section}/${logo}.png`}
        alt={`logo ${logo}`}
        width={section === 'technos' ? 80 : 150}
        height={section === 'technos' ? 80 : 150}
        objectFit="contain"
      />
    ))}
  </div>
);

export default LogosWrapper;
