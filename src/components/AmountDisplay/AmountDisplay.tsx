import styles from "./AmountDisplay.module.css";

export interface AmountDisplayProps {
  label: string;
  amount: number;
  decimals?: number;
}

export const AmountDisplay = ({
  label,
  amount,
  decimals = 2,
}: AmountDisplayProps) => {
  const formattedAmount = amount ? amount.toFixed(decimals) : "--";

  return (
    <div className={styles.amountDisplay}>
      <div className={styles.labelPerson}>
        <span className={styles.label}>{label}</span>
        <span className={styles.person}>/ person</span>
      </div>

      <div>
        <span className={styles.amount}>${formattedAmount}</span>
      </div>
    </div>
  );
};
