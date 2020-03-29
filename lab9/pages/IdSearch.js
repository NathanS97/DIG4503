import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from './styles.module.css';

const Id = () => {
  return (
    <div className={styles.body} >
      <Head>
        <title>Id Search</title>
      </Head>
      <br></br>
      <Link href="/index">
        <a className={styles.link}>Home</a>
      </Link>
      <IdSearch />
      <br></br>
      <Link href="/NameSearch">
        <a className={styles.link}>Search by Name</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/TypeSearch">
        <a className={styles.link}>Search by Type</a>
      </Link>
      <br></br>
      <div className={styles.heading}>Result(s):
      <div className={styles.reporting} id="reportingArea"></div>
      </div>
    </div >
  );
}

export default Id;