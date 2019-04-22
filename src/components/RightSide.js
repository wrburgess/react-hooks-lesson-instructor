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

// class RightSide extends Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     widgetsCount: 5
//   };
// }

//   handleClick(ev) {
//     ev.preventDefault();
//     this.setState({ widgetsCount: this.state.widgetsCount + 1 });
//   }

//   render() {
//     return (
//       <div className="right">
//         <p data-testid="title">Right Component</p>
//         <p data-testid="results">
//           Number of Widgets: {this.state.widgetsCount}
//         </p>
//         <button
//           data-testid="button-increment"
//           onClick={ev => this.handleClick(ev)}
//         >
//           Add Widget
//         </button>
//       </div>
//     );
//   }
// }

export default RightSide;
