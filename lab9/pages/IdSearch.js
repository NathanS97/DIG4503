import IdSearch from '../components/IdSearch';
import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class IdSearch extends React.Component {
  findId() {
    let id = document.querySelector("#idInput");

    fetch("/api/pokemon/id/" + id.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultElement = document.querySelector("#idResults");

        if (processed.error) {
          resultElement.innerHTML = "No Pokemon could be found with that ID";
        } else {
          resultElement.innerHTML = "Found, the Pokemon with that ID is " + processed.name;
        }
      });
  }

  render() {
    return (
      <div>
        <Head>
          <title>ID</title>
        </Head>
        <div>
          <h3 className={styles.header}>Search by ID</h3>
          <input type="text" id="idInput" className={styles.input} />
          <button className={styles.button} onClick={() => { this.findId() }}>Submit</button>
          <div id="idResults" className={styles.results}></div>
        </div>

        <div className={styles.links}>
          <Link href="/NameSearch">
            <a>Name Search</a>
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

export default IdSearch;