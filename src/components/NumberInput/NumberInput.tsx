import styles from "./NumberInput.module.css";

export interface NumberInputProps {
  /**
   * Label of the Input
   */
  label: string;

  /**
   * Type of the icon
   */
  iconType: "person" | "dollar";
}

export const NumberInput = (props: NumberInputProps) => {
  return (
    <div className={styles.numberInputContainer}>
      <label htmlFor="numberInput">{props.label}</label>
      <input
        type="number"
        id="numberInput"
        className={`${styles[props.iconType]} ${styles.numberInput}`}
        placeholder="0"
      />
    </div>
  );
};
