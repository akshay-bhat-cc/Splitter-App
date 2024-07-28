import styles from "./TipButton.module.css";

export interface TipButtonProps {
  // Add your props here
  tipPercentage: number | "custon";
}

export const TipButton = ({ tipPercentage }: TipButtonProps) => {
  return (
    <div>
      <button
        className={`${tipPercentage !== "custon" ? styles.tip : styles.custom} ${styles.tipButton}`}
      >
        {tipPercentage !== "custon" ? `${tipPercentage}%` : "custom"}
      </button>
    </div>
  );
};
