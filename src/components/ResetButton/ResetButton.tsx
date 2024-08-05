import React from "react";
import styles from "./ResetButton.module.css";

export interface ResetButtonProps extends React.ComponentProps<"button"> {
  // Add your props here
  label: string;
  isSelected: boolean;
}

export const ResetButton = ({
  label,
  isSelected,
  ...delegated
}: ResetButtonProps) => {
  let buttonClass = `${styles.resetButton} `;
  if (isSelected) {
    buttonClass += ` ${styles.selected} `;
  }
  return (
    <button className={buttonClass} {...delegated}>
      {label}
    </button>
  );
};
