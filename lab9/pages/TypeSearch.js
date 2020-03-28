import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class TypeSearch extends React.Component {
  findType() {
    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/typeList/" + type.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultElement = document.querySelector("#typeResults");

        if (processed.error) {
          resultElement.innerHTML = "No Pokemon could be found with that type";
        } else {
          resultElement.innerHTML = "Found, the Pokemon with that type are " + processed.name;
        }
      });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Type</title>
        </Head>
        <div>
          <h3 className={styles.header}>Search by Type</h3>
          <input type="text" id="typeInput" className={styles.input} />
          <button className={styles.button} onClick={() => { this.findType() }}>Submit</button>
          <div id="typeResults" className={styles.results}></div>
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
          <Link href="/NameSearch">
            <a>Name Search</a>
          </Link>
        </div>

      </div>
    );
  }
}

export default TypeSearch;