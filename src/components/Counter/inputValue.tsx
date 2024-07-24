import { useState } from "react";
import styles from "./inputValue.module.css";
export const Input = ({
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
      />
      <button className={styles.setButton} onClick={handleClick}>
        Set
      </button>
    </div>
  );
};
