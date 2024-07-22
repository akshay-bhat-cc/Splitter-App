import { MouseEventHandler, useState } from "react";
import styles from "./CounterComponent.module.css";

export const CounterControlComponent = ({
  value,
  increment,
  decrement,
}: {
  value: number;
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.counterControls}>
      <button className={styles.counterButton} onClick={decrement}>
        -
      </button>
      <span className={styles.counterValue}>{value}</span>
      <button className={styles.counterButton} onClick={increment}>
        +
      </button>
    </div>
  );
};

export const InputComponent = ({
  setInitialValue,
}: {
  setInitialValue: (value: number) => void;
}) => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value === "" ? "" : Number(value));
  };

  const handleClick = () => {
    if (inputValue === "" || isNaN(inputValue)) return;
    setInitialValue(Number(inputValue));
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type="number"
        placeholder="Enter initial Value"
        onChange={handleInputChange}
        min={0}
      />
      <button className={styles.setButton} onClick={handleClick}>
        Set
      </button>
    </div>
  );
};

export const CounterComponent = ({
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
    if (counterValue === 0) return;
    setCounterValue(counterValue - 1);
    updatedTotalSum(-1);
  };

  const setInitialValue = (value: number) => {
    if (value < 0) return;
    updatedTotalSum(value - counterValue);
    setCounterValue(value);
  };

  return (
    <div className={styles.counterContainer}>
      <InputComponent setInitialValue={setInitialValue}></InputComponent>
      <CounterControlComponent
        value={counterValue}
        increment={increment}
        decrement={decrement}
      ></CounterControlComponent>
    </div>
  );
};

export const DisplayTotal = ({ sum }: { sum: number }) => {
  return (
    <>
      <h2>
        Total is <span className={styles.sum}>{sum}</span>
      </h2>
    </>
  );
};
