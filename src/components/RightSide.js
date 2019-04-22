import React, { Component } from "react";

class RightSide extends Component {
  state = {
    widgetsCount: 5
  };

  handleClick() {
    this.setState({ widgetsCount: this.state.widgetsCount + 1 });
  }

  render() {
    return (
      <div className="right">
        <p>Right Component</p>
        <p>Number of Widgets: `${this.widgetsCount}`</p>
        <button onClick={this.handleClick}>Add Widget</button>
      </div>
    );
  }
}

export default RightSide;
