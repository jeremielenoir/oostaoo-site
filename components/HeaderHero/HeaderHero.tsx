import { FC } from 'react';
import Image from 'next/image';

import styles from './HeaderHero.module.css';
import Background from '../../assets/bg.jpg';

const HeaderHero: FC = () => {
   return (
      <div className={styles.container}>
         <Image className={styles.headerHero} src={Background} alt="Header background image" />

         <div className={styles.heroTextContainer}>
            <p className={styles.heroText}>Trouvez le talent que vous cherchez</p>
         </div>
      </div>
   );
};

export default HeaderHero;
