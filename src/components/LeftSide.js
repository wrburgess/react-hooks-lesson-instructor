import React, { Component } from "react";

class LeftSide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgetsCount: 2
    };
  }

  handleClick(ev) {
    ev.preventDefault();
    this.setState({ widgetsCount: this.state.widgetsCount + 1 });
  }

  render() {
    return (
      <div className="left">
        <p data-testid="title">Left Component</p>
        <p data-testid="results">
          Number of Widgets: {this.state.widgetsCount}
        </p>
        <button onClick={ev => this.handleClick(ev)}>Add Widget</button>
      </div>
    );
  }
}

export default LeftSide;
