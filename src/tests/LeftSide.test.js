import React from "react";
import LeftSide from "../components/LeftSide";
import { render, fireEvent } from "react-testing-library";

const { getByTestId, getByText } = render(<LeftSide />);

describe("components/LeftSide", () => {
  it("renders with title", () => {
    expect(getByTestId("title").textContent).toBe("Left Component");
  });

  it("clicking the button increments widgets by one", () => {
    const button = getByText("Add Widget");
    expect(button.tagName).toBe("BUTTON");

    fireEvent.click(button);
    expect(getByTestId("results").textContent).toBe("Number of Widgets: 3");

    fireEvent.click(button);
    expect(getByTestId("results").textContent).toBe("Number of Widgets: 4");
  });
});
