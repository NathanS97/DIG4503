import React from "react";

class IdSearch extends React.Component {
  findId(event) {
    event.preventDefault();
    let element = document.querySelector("#id");

    fetch('/api/pokemon/id/' + element.value).then((res) => {
      return res.json();
    })
      .then((processed) => {

        let reporting = document.querySelector("#reportingArea");

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.name;
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Search Pokemon ID</h2>
        <form onSubmit={this.findId}>
          <input id="id" type="text" placeholder="Id" />
          <button>SEARCH</button>
        </form>
        <br></br>
      </div>
    );
  }
}

export default IdSearch;