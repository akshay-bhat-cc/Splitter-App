import styles from "./Header.module.css";

export interface HeaderProps {
  // Add your props here
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h2>{label.substring(0, label.length / 2)}</h2>
      <h2>{label.substring(label.length / 2)}</h2>
    </div>
  );
};
