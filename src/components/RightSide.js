import React, { useState } from "react";

function RightSide() {
  const [widgetsCount, setWidgetsCount] = useState(5);

  function handleClick() {
    setWidgetsCount(widgetsCount + 1);
  }

  return (
    <div className="right">
      <p data-testid="title">Right Component</p>
      <p data-testid="results">Number of Widgets: {widgetsCount}</p>
      <button onClick={handleClick}>Add Widget</button>
    </div>
  );
}

export default RightSide;
