import React from "react";
import styles from "./SelectTip.module.css";

export interface SelectTipProps {
  // Add your props here
  label: string;
  children: React.ReactNode;
}

export const SelectTip = ({ label, children }: SelectTipProps) => {
  return (
    <div className={styles.selectTip}>
      <span className={styles.label}>{label}</span>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
