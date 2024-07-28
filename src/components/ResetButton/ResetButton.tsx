import React from "react";
import styles from "./ResetButton.module.css";

export interface ResetButtonProps {
  // Add your props here
  label: string;
}

export const ResetButton = ({ label }: ResetButtonProps) => {
  return <button className={styles.resetButton}>{label}</button>;
};
