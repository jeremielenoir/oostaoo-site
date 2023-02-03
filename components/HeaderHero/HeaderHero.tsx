import { FC } from 'react';
import Image from 'next/image';

import styles from './HeaderHero.module.css';
import Background from '../../assets/bg.jpg';

interface HeroProps {
  text: string;
}

const HeaderHero: FC<HeroProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.headerHero}
        src={Background}
        alt="Header background image"
      />

      <div className={styles.heroTextContainer}>
        <p className={styles.heroText}>{text}</p>
      </div>
    </div>
  );
};

export default HeaderHero;
