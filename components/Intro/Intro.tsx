import { FC } from 'react';

import styles from './Intro.module.css';
import { introElements } from '../../assets/Intro';

const Intro: FC = () => {
   return (
      <div className={styles.container}>
         {introElements.map((element, index) => {
            return (
               <div className={styles.subContainer} key={index}>
                  <h1>{element.number}</h1>
                  <h2>{element.title[0].toUpperCase() + element.title.slice(1).toLowerCase()}</h2>
                  <p>{element.text}</p>
               </div>
            );
         })}
      </div>
   );
};

export default Intro;
