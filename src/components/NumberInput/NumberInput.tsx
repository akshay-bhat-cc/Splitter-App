import { useId } from "react";
import styles from "./NumberInput.module.css";

export interface NumberInputProps extends React.ComponentProps<"input"> {
  /**
   * Label of the Input
   */
  label: string;

  /**
   * Type of the icon
   */
  iconType: "person" | "dollar";

  /**
   * Error message that will be displayed on wrong input
   */
  errorMessage?: string;

  /**
   * Condition that returns true if the value is invalid otherwise false
   */
  isValidInput?: (value: number) => boolean;
}

const iconPaths = {
  dollar: "src/components/NumberInput/assets/input-icons/dollar-icon.svg",
  person: "src/components/NumberInput/assets/input-icons/person-icon.svg",
};

export const NumberInput = ({
  label,
  iconType,
  errorMessage,
  ...delegated
}: NumberInputProps) => {
  let inputClass = `${styles.numberInput}`;
  if (errorMessage) {
    inputClass += ` ${styles.error}`;
  }
  const uniqueId = useId();
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`${uniqueId}number-input`}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type="number"
          id={`${uniqueId}number-input`}
          className={inputClass}
          {...delegated}
        />
        <div className={styles.iconContainer}>
          <img
            src={iconPaths[iconType]}
            width={iconType === "dollar" ? 14 : 18}
            alt={`${iconType}-icon`}
          />
        </div>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};
