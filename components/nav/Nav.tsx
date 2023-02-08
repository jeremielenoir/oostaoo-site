import { useState, FC } from 'react';
import Image from 'next/image';

import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import logoOostaoo from '../../assets/logo-oostaoo.png';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import linkedin from '../../assets/img/linkedin.png';
import styles from './Nav.module.css';

import { ListButtonNav } from '../ListButtonNav/ListButtonNav';
import { ListButtonNavArray } from '../../types/types.ts';

const navSectionsArray: ListButtonNavArray = [
  'accueil',
  'services',
  'technos',
  'references',
  'offres',
  'contact',
];

const Nav: FC = () => {
  const [displayFull, setDisplayFull] = useState('accueil');

  const handleClick = (section: string) => {
    setDisplayFull(section);
  };

  return (
    <header className={styles.navContainer}>
      <section className={styles.navTop}>
        <div className={styles.navTopLeft}>
          <a className={styles.navTopLeftContact} href="tel:+330142637727">
            <LocalPhoneIcon />
            01 42 63 77 27
          </a>
          <a
            className={styles.navTopLeftContact}
            href="mailto:contact@oostaoo.com"
          >
            <MailRoundedIcon />
            contact@oostaoo.com
          </a>
        </div>
        <div className={styles.navTopRight}>
          <a href="https://www.facebook.com/oostaoo/">
            <Image src={facebook} alt="logo facebook" height={33} width={33} />
          </a>
          <a href="https://twitter.com/oostaoo?lang=fr">
            <Image src={twitter} alt="logo twitter" height={33} width={33} />
          </a>
          <a href="https://www.linkedin.com/company/oostaoo-consulting/">
            <Image src={linkedin} alt="logo linkedin" height={33} width={33} />
          </a>
        </div>
      </section>
      <section className={styles.navBottom}>
        <Image src={logoOostaoo} alt="logo Oostaoo" height={70} width={100} />
        <ul className={styles.navBottomRight}>
          {navSectionsArray.map((section, index) => (
            <ListButtonNav
              displayFull={displayFull}
              handleClick={handleClick}
              section={section}
              key={section}
              btnIndex={index}
              lastElementIndex={navSectionsArray.length - 1}
            />
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Nav;
