import styles from "./AmountInfo.module.css";
import { AmountDisplay } from "../AmountDisplay/AmountDisplay";
import { ResetButton } from "../ResetButton/ResetButton";

export interface AmountInfoProps {
  // Add your props here
}

export const AmountInfo = () => {
  return (
    <div className={styles.amountInfo}>
      <div className={styles.amount}>
        <AmountDisplay amount={0} label={"Tip Amount"}></AmountDisplay>
        <AmountDisplay amount={0} label={"Total"}></AmountDisplay>
      </div>
      <ResetButton label={"RESET"}></ResetButton>
    </div>
  );
};
