import React from "react";

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.firstName}</p>
      </div>
    );
  }
}

export default HomePage;