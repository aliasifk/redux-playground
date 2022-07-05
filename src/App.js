import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrementValue, incrementValue } from "./app/counter";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(incrementValue())}>Increment</button>
      <button onClick={() => dispatch(decrementValue())}>Decrement</button>
      <div>
        <h3>Value: {value}</h3>
      </div>
    </div>
  );
}

export default App;
