import React, { Component } from "react";

class Bottom extends Component {
  state = {
    widgetsCount: 10
  };

  handleClick(ev) {
    ev.preventDefault();
    this.setState({ widgetsCount: this.state.widgetsCount + 1 });
  }

  render() {
    return (
      <div className="bottom">
        <p data-testid="title">Bottom Component</p>
        <p data-testid="results">
          Number of Widgets: {this.state.widgetsCount}
        </p>
        <button onClick={ev => this.handleClick(ev)}>Add Widget</button>
      </div>
    );
  }
}

export default Bottom;
