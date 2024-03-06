import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import logoOostaoo from '../../assets/logo-oostaoo.png';
import styles from './NavBackOffice.module.css';

const Nav: FC = () => {
  
  return (
    <header className={styles.navContainer}>
      <section className={styles.navBottom}>
        <Image src={logoOostaoo} alt="logo Oostaoo" height={70} width={100} />
        <ul className={styles.navBottomRight}>
          <Link className={styles.offerLink} href="/backoffice/jobs">
            <Button variant="contained">Accueil</Button>
          </Link>
        </ul>
      </section>
    </header>
  );
};
export default Nav;
