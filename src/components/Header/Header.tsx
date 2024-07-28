import React from "react";
import styles from "./Header.module.css";

export interface HeaderProps {
  // Add your props here
  header: string;
}

export const Header = ({ header }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p>{header.substring(0, header.length / 2)}</p>
      <p>{header.substring(header.length / 2)}</p>
    </div>
  );
};
