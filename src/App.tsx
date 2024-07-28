// import { useState } from "react";
import "./App.css";
import { AmountInfo } from "./components/AmountInfo/AmountInfo";
import { TipCalculator } from "./components/TipCalculator/TipCalculator";
// import { Counter } from "./components/Counter/Counter";
// import { DisplayTotal } from "./components/Counter/DisplayTotal";

function App() {
  // const [totalSum, setTotalSum] = useState(0);
  // const updateTotalSum = (value: number) => {
  //   setTotalSum((prevTotal) => prevTotal + value);
  // };
  return (
    <>
      {/* <DisplayTotal sum={totalSum}></DisplayTotal> */}
      <div className="splitter">
        {/* <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter>
        <Counter updatedTotalSum={updateTotalSum}></Counter> */}
        <TipCalculator></TipCalculator>
        <AmountInfo></AmountInfo>
      </div>
    </>
  );
}

export default App;
