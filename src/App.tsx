import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { DisplayTotal } from "./components/Counter/DisplayTotal";

function App() {
  const [totalSum, setTotalSum] = useState(0);
  const updateTotalSum = (value: number) => {
    setTotalSum((prevTotal) => prevTotal + value);
  };
  return (
    <>
      <DisplayTotal sum={totalSum}></DisplayTotal>
      <div className="counters">
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
      </div>
    </>
  );
}

export default App;
