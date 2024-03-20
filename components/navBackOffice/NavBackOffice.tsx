import { FC } from 'react';
import router from 'next/router';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import logoOostaoo from '../../assets/logo-oostaoo.png';
import styles from './NavBackOffice.module.css';


const Nav: FC = () => {
  const handleLogout = () => {
    // Supprimer le token du cookie (ou du stockage local)
    Cookies.remove('token');
    // Rediriger vers la page de connexion
    router.push('/authentification/login');
  };
  return (
    <header className={styles.navContainer}>
      <section className={styles.navBottom}>
        <Image src={logoOostaoo} alt="logo Oostaoo" height={70} width={100} />
        <ul className={styles.navBottomRight}>
          <Link className={styles.offerLink} href="/backoffice/jobs">
            <Button variant="contained">Dashboard</Button>
          </Link>
          <Link className={styles.offerLink} href="">
            <Button variant="contained" onClick={handleLogout}>Deconnexion</Button>
          </Link>
        </ul>
      </section>
    </header>
  );
};
export default Nav;
