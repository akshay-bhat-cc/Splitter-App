import styles from "./DisplayTotal.module.css";

export interface DisplayTotal {
  /**
   * Sum Value to be displayed
   */
  sum: number;
}

export const DisplayTotal = ({ sum }: { sum: number }) => {
  return (
    <>
      <h2>
        Total is <span className={styles.sum}>{sum}</span>
      </h2>
    </>
  );
};
