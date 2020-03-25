import React, { useState, Fragment } from "react";
import "./App.css";

const Counter = ({ count, setCount, index }) => {
  const handleAdd = operation => {
    const newArray = [...count]
    if (operation === "add") {
      newArray[index] += 1
      return setCount(newArray);
    }
    newArray[index] -= 1
    return setCount(newArray);
  };

  return (
    <Fragment>
      <button onClick={() => handleAdd("add")}>+</button>
      <div>{count[index]}</div>
      <button onClick={() => handleAdd("sub")}>-</button>
    </Fragment>
  );
};

const App = () => {
  const [counter, setCounter] = useState([0, 1, 3]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <button onClick={() => setCounter([...counter, 0])}>
        Add Counter
      </button>
      
      {counter.map((c, i) => (
        <Counter index={i} count={counter} setCount={setCounter} />
      ))}
      <div>{counter.reduce((a,v) => a += v)}</div>
    </div>
  );
};

export default App;
