import styles from "./TipCalculator.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { SelectTip } from "../SelectTip/SelectTip";
import { TipButton } from "../TipButton/TipButton";
import { ChangeEvent } from "react";

export interface TipCalculatorProps {
  billInputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  personInputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  personInputErrorMessage: string;
  billInputErrorMessage: string;
  minPersonCount: number;
  minBillAmount: number;
  minCustomTip: number;
  billAmount: number;
  personCount: number;
  tipPercentages: (number | "custom")[];
  selectTipHandle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  customTipHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedTip: number | "custom";
  customTip: number;
}

export const TipCalculator = ({
  billInputHandle,
  personInputHandle,
  personInputErrorMessage,
  billInputErrorMessage,
  minBillAmount,
  minPersonCount,
  selectTipHandle,
  customTipHandle,
  tipPercentages,
  selectedTip,
  minCustomTip,
  billAmount,
  personCount,
  customTip,
}: TipCalculatorProps) => {
  return (
    <div className={styles.tipCalculator}>
      <NumberInput
        iconType="dollar"
        label="Bill"
        onChange={billInputHandle}
        errorMessage={billInputErrorMessage}
        min={minBillAmount}
        value={billAmount === 0 ? "" : billAmount}
      ></NumberInput>
      <SelectTip label="Select Tip %">
        {tipPercentages.map((percentage, index) => (
          <TipButton
            key={index}
            tipPercentage={percentage}
            onClick={selectTipHandle}
            customTipHandle={customTipHandle}
            isSelected={selectedTip === percentage}
            minCustomTip={minCustomTip}
            customTip={customTip}
          ></TipButton>
        ))}
      </SelectTip>
      <NumberInput
        iconType="person"
        label="No of People"
        onChange={personInputHandle}
        errorMessage={personInputErrorMessage}
        min={minPersonCount}
        value={personCount === 0 ? "" : personCount}
      ></NumberInput>
    </div>
  );
};
