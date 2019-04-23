import React, { useState } from "react";

function Bottom() {
  const [widgetsCount, setWidgetsCount] = useState(10);

  function handleClick() {
    setWidgetsCount(widgetsCount + 1);
  }

  return (
    <div className="bottom">
      <p data-testid="title">Bottom Component</p>
      <p data-testid="results">Number of Widgets: {widgetsCount}</p>
      <button onClick={handleClick}>Add Widget</button>
    </div>
  );
}

export default Bottom;
