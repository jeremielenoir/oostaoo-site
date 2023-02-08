import { FC } from 'react';

import styles from './Intro.module.css';
import introElements from '../../assets/Intro';

const Intro: FC = () => (
  <div className={styles.container}>
    {introElements.map((element) => (
      <div className={styles.subContainer} key={element.number}>
        <h1>{element.number}</h1>
        <h2>
          {element.title[0].toUpperCase() +
            element.title.slice(1).toLowerCase()}
        </h2>
        <p>{element.text}</p>
      </div>
    ))}
  </div>
);

export default Intro;
