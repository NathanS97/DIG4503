class TypeSearch extends React.Component {
  findType() {
    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/typeList/" + type.value)
      .then((res) => { return res.json(); })
      .then((processed) => {
        let resultElement = document.querySelector("#typeResults");

        if (processed.error) {
          resultElement.innerHTML = "No pokemon could be found with that Type";
        } else {
          resultElement.innerHTML = "Found, the Pokemon with that type are " + filter.type;
        }
      });
  }

  render() {
    return (
      <div>
        <h3>Type Search</h3>
        <input type="text" id="typeInput" />
        <button onClick={() => { this.findType() }}>Submit</button>
        <div id="typeResults"></div>
      </div>
    );
  }
}

export default TypeSearch;