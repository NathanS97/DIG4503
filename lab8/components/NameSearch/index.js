class NameSearch extends React.Component {
  getName() {
    let name = document.querySelector("#nameInput");

    fetch("/api/pokemon/name/" + name.value)
      .then((res) => { return res.json(); })
      .then((processed) => {

        let resultElement = document.querySelector("#nameresults");

        if (processed.error) {
          resultElement.innerHTML = "No pokemon with that name exists";
        } else {
          resultElement.innerHTML = "Found! Its ID is " + processed.id;
        }
      });
  }

  render() {
    return (
      <div>
        <h3>Name Search</h3>
        <input type="text" id="nameInput" />
        <button onClick={() => { this.getName() }}>Submit!</button>
        <div id="nameresults"></div>
      </div>
    );
  }

}

export default NameSearch;