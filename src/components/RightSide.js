import React, { Component } from "react";

class RightSide extends Component {
  state = {
    widgetsCount: 5
  };

  handleClick(ev) {
    ev.preventDefault();
    this.setState({ widgetsCount: this.state.widgetsCount + 1 });
  }

  render() {
    return (
      <div className="right">
        <p data-testid="title">Right Component</p>
        <p data-testid="results">
          Number of Widgets: {this.state.widgetsCount}
        </p>
        <button
          data-testid="button-increment"
          onClick={ev => this.handleClick(ev)}
        >
          Add Widget
        </button>
      </div>
    );
  }
}

export default RightSide;
