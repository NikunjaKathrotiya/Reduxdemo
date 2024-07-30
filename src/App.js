// src/App.js
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";
function App() {
  
  const count = useSelector((state) => state.changethenumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="for-align">
        <h1>Welcome to Redux App</h1>
        <p className="inc">INCREMENT AND DECREMENT</p>
        <div className="quantity">
          <button onClick={() => dispatch(decNumber())}>-</button>
          <input value={count} readOnly />
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
