import React from "react";
import RightSide from "../components/RightSide";
import { render, fireEvent } from "react-testing-library";

const { getByTestId, getByText } = render(<RightSide />);

describe("components/RightSide", () => {
  it("renders with title", () => {
    expect(getByTestId("title").textContent).toBe("Right Component");
  });

  it("clicking the button increments widgets by one", () => {
    const button = getByText("Add Widget");
    expect(button.tagName).toBe("BUTTON");

    fireEvent.click(button);
    expect(getByTestId("results").textContent).toBe("Number of Widgets: 6");

    fireEvent.click(button);
    expect(getByTestId("results").textContent).toBe("Number of Widgets: 7");
  });
});
