class IdSearch extends React.Component {
  getId() {
    let id = document.querySelector('#idInput');

    fetch('api/pokemon/id/' + id.value)
      .then((res) => { return res.json(); })
      .then((processed) => {

        let resultElement = document.querySelector('#idResult');

        if (processed.error) {
          resultElement.innerHTML = "No pokemon with that ID exists";
        } else {
          resultElement.innerHTML = "Found! That ID belongs to " + processed.name;
        }
      });
  }

  render() {
    return (
      <div>
        <h3>ID Search</h3>
        <input type="text" id="idInput" />
        <button onClick={() => { this.getId() }}>Submit</button>
        <div id="idResult"></div>
      </div>
    );
  }

}

export default IdSearch;