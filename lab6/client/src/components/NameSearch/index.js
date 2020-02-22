import React from 'react';

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();

    let element = document.querySelector('#pokemonname');

    fetch('http://localhost:80/name/' + element.value)
      .then((res) => {
        return res.json();
      })
      .then((processed) => {
        let reporting = document.querySelector('#reportingArea');

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.id;
        }
      });

    element.value = '';
  }

  render() {
    return (
      <div>
        <h2>Search by Name:</h2>
        <form onSubmit={this.readName}>
          <input id="pokemonname" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NameSearch;
