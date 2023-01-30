import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
// import styles from "./listButtonNav.module.css";
import { ListButtonNavProps } from '@/types/types.js';

export const ListButtonNav: React.FC<ListButtonNavProps> = ({
   handleClick,
   displayFull,
   section,
   btnIndex,
   lastElementIndex,
}) => {
   return (
      <li>
         <Link
            to={section}
            spy
            smooth
            isDynamic
            offset={btnIndex === 0 ? 50 : btnIndex === lastElementIndex ? -560 : -200}
            duration={500}
            spyThrottle={100}
            onSetActive={() => handleClick(section)}
         >
            <Button variant={displayFull === section ? 'contained' : undefined}>{section}</Button>
         </Link>
      </li>
   );
};
