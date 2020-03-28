import TypeSearch from '../components/TypeSearch';
import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class TypeSearch extends React.Component {
  findType() {
    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/typeList/" + type.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultName = document.querySelector("#resultName")
        let resultType = document.querySelector("#resultType");

        if (processed.error) {
          resultName.innerHTML = processed.error;
          resultType.innerHTML = processed.error;
        } else {
          resultType.innerHTML = processed.typeList;
          resultName.innerHTML = processed.name;
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
          <div id="resultType" className={styles.results}></div>
          <div id="resultName" className={styles.results}></div>
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