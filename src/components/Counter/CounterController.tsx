import { MouseEventHandler } from "react";
import styles from "./CounterController.module.css";

export const CounterControl = ({
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
