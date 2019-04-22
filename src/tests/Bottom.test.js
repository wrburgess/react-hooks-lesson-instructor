import React from "react";
import Bottom from "../components/Bottom";
import { render, fireEvent } from "react-testing-library";

const { getByTestId, getByText } = render(<Bottom />);

describe("components/LeftSide", () => {
  it("renders with title", () => {
    expect(getByTestId("title").textContent).toBe("Bottom Component");
  });

  it("clicking the button increments widgets by one", () => {
    const button = getByText("Add Widget");
    expect(button.tagName).toBe("BUTTON");

    fireEvent.click(button);
    expect(getByTestId("results").textContent).toBe("Number of Widgets: 11");
  });
});
