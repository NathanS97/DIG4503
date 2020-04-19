import React from "react";

class TypeSearch extends React.Component {
  findType(event) {
    event.preventDefault();
    let element = document.querySelector("#type");

    fetch('/api/pokemon/type/' + element.value)
      .then((res) => {
        return res.json();
      })
      .then((processed) => {
        let reporting = document.querySelector("#reportingArea");

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.name;
          console.log(processed.name);
        }
      })
  }

  render() {
    return (
      <div>
        <h2>Search Pokemon Type</h2>
        <form onSubmit={this.findType}>
          <input id="type" type="text" placeholder="Type" />
          <button>SEARCH</button>
        </form>
        <br></br>
      </div>
    )
  }
}

export default TypeSearch;