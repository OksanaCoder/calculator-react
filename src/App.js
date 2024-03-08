import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setResult(evaluate(input).toString());
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="container">
      <div className="flex-style">
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div className="grid-container">
        <button className="grid-item" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="grid-item" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="grid-item" onClick={() => handleClick("3")}>
          3
        </button>

        <button className="grid-item" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="grid-item" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="grid-item" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="grid-item" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="grid-item" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="grid-item" onClick={() => handleClick("9")}>
          9
        </button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick(".")}>.</button>

        <button onClick={() => handleClick("0")}>0</button>
      </div>
      <div className="grid-side">
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
}

export default App;
