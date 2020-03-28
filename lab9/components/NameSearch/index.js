class NameSearch extends React.Component {
  findName() {
    let name = document.querySelector("#nameInput");

    fetch("/api/pokemon/name/" + name.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultElement = document.querySelector("#nameResults");

        if (processed.error) {
          resultElement.innerHTML = "No pokemon could be found with that name";
        } else {
          resultElement.innerHTML = "Found, that Pokemons ID is " + processed.id;
        }
      });
  }

  render() {
    return (
      <div>
        <h3>Name Search</h3>
        <input type="text" id="nameInput" />
        <button onClick={() => { this.findName() }}>Submit</button>
        <div id="nameResults"></div>
      </div>
    );
  }
}

export default NameSearch;