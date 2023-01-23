import React from 'react';

import styles from './Intro.module.css';

const Intro = () => {
   return (
      <div className={styles.container}>
         <div className={styles.subContainer}>
            <h1>01</h1>
            <h2>TALENTS</h2>
            <p>
               Dévelopeur expérimenté et polyvalent, acteur responsable majeur des projets qui
               s&apos;adonne à la coordination et à l&apos;accompagnement de son équipe de
               dévelopeur à l&apos;aide de ses connaissance technique précises.
            </p>
         </div>
         <div className={styles.subContainer}>
            <h1>02</h1>
            <h2>MISSIONS</h2>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima blanditiis ea, quia,
               magnam ducimus architecto provident quo nulla enim, nemo nihil repellendus tenetur
               nam. Dolores vero nihil unde quidem quod.
            </p>
         </div>
      </div>
   );
};

export default Intro;
