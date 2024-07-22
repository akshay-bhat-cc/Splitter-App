import { useState } from "react";
import "./App.css";
import { CounterComponent, DisplayTotal } from "./components/CounterComponent";

function App() {
  const [totalSum, setTotalSum] = useState(0);
  const updateTotalSum = (value: number) => {
    setTotalSum((prevTotal) => prevTotal + value);
  };
  return (
    <>
      <DisplayTotal sum={totalSum}></DisplayTotal>
      <div className="counters">
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
        <CounterComponent updatedTotalSum={updateTotalSum}></CounterComponent>
      </div>
    </>
  );
}

export default App;
