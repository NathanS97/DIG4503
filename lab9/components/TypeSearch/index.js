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
        <h3>Type Search</h3>
        <input type="text" id="typeInput" />
        <button onClick={() => { this.findType() }}>Submit</button>
        <div id="resultType"></div>
        <div id="resultName"></div>
      </div>
    );
  }
}

export default TypeSearch;