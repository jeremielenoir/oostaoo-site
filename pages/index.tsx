import Nav from '@/components/nav/Nav';
import Head from 'next/head';

import styles from './Home.module.css';
import Intro from '@/components/Intro/Intro';
import HeaderHero from '@/components/HeaderHero/HeaderHero';

export default function Home() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={styles.main}>
            <Nav />          
            <HeaderHero text={'Trouvez le talent que vous cherchez'} />
            <Intro />
            hello world
         </main>
      </>
   );
}
