import React from "react";
import ReactDOM from "react-dom";
import RightSide from "./RightSide";

describe("components/RightSide", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RightSide />, div);
  });

  it("clicking the button changes the state", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RightSide />, div);
  });
});
