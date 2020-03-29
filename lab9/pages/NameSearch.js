import Head from 'next/head';
import Link from 'next/link';
import NameSearch from "../components/NameSearch";
import styles from './styles.module.css';

const Name = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Name Search</title>
      </Head>
      <br></br>
      <Link href="/index">
        <a className={styles.link}>Home</a>
      </Link>
      <NameSearch />

      <br></br>
      <Link href="/IdSearch">
        <a className={styles.link}>Search by Id</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/TypeSearch">
        <a className={styles.link}>Search by Type</a>
      </Link>
      <br></br>
      <div className={styles.heading}>Results:
      <div className={styles.reporting} id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Name;