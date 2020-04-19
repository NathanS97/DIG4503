import React from "react";

class NameSearch extends React.Component {
  findName(event) {
    event.preventDefault();

    let element = document.querySelector("#name");


    fetch('/api/pokemon/name/' + element.value)
      .then((res) => {
        return res.json();
      })
      .then((processed) => {

        let reporting = document.querySelector("#reportingArea");

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.id;
        }
      })
  }

  render() {
    return (
      <div>
        <h2>Search Pokemon Name</h2>
        <form onSubmit={this.findName}>
          <input id="name" type="text" placeholder="Name" />
          <button>SEARCH</button>
        </form>
        <br></br>
      </div>
    )
  }
}

export default NameSearch;