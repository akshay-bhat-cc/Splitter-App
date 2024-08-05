import styles from "./AmountInfo.module.css";
import { AmountDisplay } from "../AmountDisplay/AmountDisplay";
import { ResetButton } from "../ResetButton/ResetButton";

export interface AmountInfoProps {
  // Add your props here
  tipAmount: number;
  totalAmount: number;
  resetHandle: () => void;
  isResetSelected: boolean;
}

export const AmountInfo = ({
  tipAmount,
  totalAmount,
  resetHandle,
  isResetSelected,
}: AmountInfoProps) => {
  return (
    <div className={styles.amountInfo}>
      <div className={styles.amount}>
        <AmountDisplay amount={tipAmount} label={"Tip Amount"}></AmountDisplay>
        <AmountDisplay amount={totalAmount} label={"Total"}></AmountDisplay>
      </div>
      <ResetButton
        label={"RESET"}
        onClick={resetHandle}
        isSelected={isResetSelected}
      ></ResetButton>
    </div>
  );
};
