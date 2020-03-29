import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from "../components/TypeSearch";
import styles from './styles.module.css';

const Type = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Type Search</title>
      </Head>
      <br></br>
      <Link href="/index">
        <a className={styles.link}>Home</a>
      </Link>
      <TypeSearch />

      <br></br>
      <Link href="/IdSearch">
        <a className={styles.link}>Search by Id</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/NameSearch">
        <a className={styles.link}>Search by Name</a>
      </Link>
      <br></br>
      <div className={styles.heading}>Results:
      <div className={styles.reporting} id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Type;