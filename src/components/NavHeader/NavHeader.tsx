import styles from "./NavHeader.module.css";

export interface NavHeaderProps {
  title: string;
  subTitle: string;
}

export const NavHeader = ({ title, subTitle }: NavHeaderProps) => {
  return (
    <>
      <h1 className={styles.navHeader}>{title}</h1>
      <h3>{subTitle}</h3>
    </>
  );
};
