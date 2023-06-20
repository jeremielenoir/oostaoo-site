import { IntroType } from '@/types/dataTypes';
import styles from './Intro.module.css';

interface IntroProps {
  introArray: IntroType[];
}

const Intro = ({ introArray }: IntroProps) => (
  <div className={styles.container}>
    {introArray.map((element) => (
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
