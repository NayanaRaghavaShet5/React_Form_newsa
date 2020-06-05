import React, { useState } from "react";

function App() {
  const [isOver, setOver] = useState(false);
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");

  function onOver() {
    setOver(true);
  }

  function onLeave() {
    setOver(false);
  }

  function getText(e) {
    setText(e.target.value);
  }

  function setData(e) {
    setHeading(text);
    //to prevent the default behaviour of the form
    e.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {heading}</h1>
        <input onChange={getText} type="text" placeholder="What's your name?" />
        <button
          type="submit"
          onMouseOver={onOver}
          onMouseLeave={onLeave}
          style={{ backgroundColor: isOver ? "black" : "white" }}
          onClick={setData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
