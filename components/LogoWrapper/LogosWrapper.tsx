import { FC } from 'react';
import Image from 'next/image.js';

import styles from './LogosWrapper.module.css';

interface PropsLogosWrapper {
  logos: string[];
  section: 'technos' | 'references';
}
const LogosWrapper: FC<PropsLogosWrapper> = ({ logos, section }) => {
  return (
    <div className={styles.logosWrapper}>
      {logos.map((logo, index) => (
        <Image
          className={styles.logoContainer}
          key={`section${index}`}
          src={`/../public/assets/${
            section === 'technos' ? 'technos' : 'references'
          }/${logo}.png`}
          alt={`logo ${logo}`}
          width={section === 'technos' ? 80 : 150}
          height={section === 'technos' ? 80 : 150}
          objectFit={'contain'}
        />
      ))}
    </div>
  );
};

export default LogosWrapper;
