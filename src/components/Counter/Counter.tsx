import { MouseEventHandler, useState } from "react";
import styles from "./Counter.module.css";
import { CounterControl } from "./CounterController";
import { Input } from "./inputValue";



export const Counter = ({
  updatedTotalSum,
}: {
  updatedTotalSum: (value: number) => void;
}) => {
  const [counterValue, setCounterValue] = useState(0);
  const increment: MouseEventHandler<HTMLButtonElement> = () => {
    setCounterValue(counterValue + 1);
    updatedTotalSum(1);
  };
  const decrement: MouseEventHandler<HTMLButtonElement> = () => {
    setCounterValue(counterValue - 1);
    updatedTotalSum(-1);
  };

  const setInitialValue = (value: number) => {
    updatedTotalSum(value - counterValue);
    setCounterValue(value);
  };

  return (
    <div className={styles.counterContainer}>
      <Input setInitialValue={setInitialValue}></Input>
      <CounterControl
        value={counterValue}
        increment={increment}
        decrement={decrement}
      ></CounterControl>
    </div>
  );
};
