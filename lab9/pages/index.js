import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>JSON PokeDex</title>
      </Head>
      <br></br>
      <h1 className={styles.heading}>JSON PokeDex</h1>

      <h2>Search By:</h2>

      <Link href="/IdSearch">
        <a className={styles.link}>ID</a>
      </Link>
      <Link href="/NameSearch">
        <a className={styles.link}>NAME</a>
      </Link>
      <Link href="/TypeSearch">
        <a className={styles.link}>TYPE</a>
      </Link>
    </div>
  );
}

export default Home; 
