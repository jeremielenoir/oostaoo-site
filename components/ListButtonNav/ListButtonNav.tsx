import { FC } from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';

// import styles from "./listButtonNav.module.css";

interface ListButtonNavProps {
  handleClick: (section: string) => void;
  displayFull: string;
  section:
    | 'accueil'
    | 'services'
    | 'technos'
    | 'references'
    | 'offres'
    | 'contact'
    | 'retour';
  btnIndex: number;
  lastElementIndex: number;
}

export const ListButtonNav: FC<ListButtonNavProps> = ({
  handleClick,
  displayFull,
  section,
  btnIndex,
  lastElementIndex,
}) => (
  <li>
    <Link
      to={section}
      spy
      smooth
      isDynamic
      offset={btnIndex === 0 ? 50 : btnIndex === lastElementIndex ? -560 : -200}
      duration={500}
      onSetActive={() => handleClick(section)}
    >
      <Button variant={displayFull === section ? 'contained' : undefined}>
        {section}
      </Button>
    </Link>
  </li>
);

export default ListButtonNav;
