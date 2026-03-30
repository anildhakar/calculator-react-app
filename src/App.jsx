import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    setError("");
    setResult(result.concat(e.target.name));
  };

  const handleChange = (e) => {
    setResult(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  const calculate = () => {
    try {
      if (result === "") return;
      // eval() string ko calculate karke result dega
      let res = eval(result).toString();
      setResult(res);
    } catch (err) {
      setError("Invalid Value! ⚠️");
      setResult("");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="container">
      <h1 className="title">My Calculator</h1>
      <div className="calculator">
        <div className="display-area">
          <input 
            type="text" 
            value={result} 
            onChange={handleChange}    
            onKeyDown={handleKeyDown}   
            placeholder="0" 
          />
          {error && <span className="error-alert">{error}</span>}
        </div>

        <div className="keypad">
          <button id="clear" onClick={() => {setResult(""); setError("");}}>Clear</button>
          <button id="backspace" onClick={() => setResult(result.slice(0, -1))}>C</button>
          <button className="operator" name="/" onClick={handleClick}>&divide;</button>
          
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operator" name="*" onClick={handleClick}>&times;</button>
          
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operator" name="-" onClick={handleClick}>&ndash;</button>
          
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operator" name="+" onClick={handleClick}>+</button>
          
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button id="result" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;