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
        <h3>ID Search</h3>
        <input type="text" id="idInput" />
        <button onClick={() => { this.findId() }}>Submit</button>
        <div id="idResults"></div>
      </div>
    );
  }
}

export default IdSearch;