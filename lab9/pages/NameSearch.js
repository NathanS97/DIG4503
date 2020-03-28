import NameSearch from '../components/NameSearch';
import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class NameSearch extends React.Component {
  findName() {
    let name = document.querySelector("#nameInput");

    fetch("/api/pokemon/name/" + name.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultElement = document.querySelector("#nameResults");

        if (processed.error) {
          resultElement.innerHTML = "No Pokemon could be found with that name";
        } else {
          resultElement.innerHTML = "Found, that Pokemon's ID  is " + processed.id;
        }
      });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Name</title>
        </Head>
        <div>
          <h3 className={styles.header}>Search by Name</h3>
          <input type="text" id="nameInput" className={styles.input} />
          <button className={styles.button} onClick={() => { this.findName() }}>Submit</button>
          <div id="nameResults" className={styles.results}></div>
        </div>

        <div className={styles.links}>
          <Link href="/IdSearch">
            <a>Id Search</a>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/index">
            <a>Home</a>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/TypeSearch">
            <a>Type Search</a>
          </Link>
        </div>

      </div>
    );
  }
}

export default NameSearch;