import React, { useState } from "react";

function App() {
  const [isOver, setOver] = useState(false);

  function onOver() {
    setOver(true);
  }

  function onLeave() {
    setOver(false);
  }

  return (
    <div className="container">
      <h1>Hello </h1>
      <input on type="text" placeholder="What's your name?" />
      <button
        onMouseOver={onOver}
        onMouseLeave={onLeave}
        style={{ backgroundColor: isOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
