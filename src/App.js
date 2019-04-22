import React, { Component } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Bottom from "./components/Bottom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <LeftSide />
        <RightSide />
        <Bottom />
      </div>
    );
  }
}

export default App;
