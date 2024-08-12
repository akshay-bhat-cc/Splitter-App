import { ChangeEvent } from "react";
import styles from "./TipInputForm.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { SelectTip } from "../SelectTip/SelectTip";
import { TipButton } from "../TipButton/TipButton";
import { TipCalculatorAction, TipCalculatorState } from "../../App";

interface TipInputFormProps {
  state: TipCalculatorState;
  dispatch: (action: TipCalculatorAction) => void;
}

export const TipInputForm = ({ state, dispatch }: TipInputFormProps) => {
  const tipPercentages: (number | "custom")[] = [5, 10, 15, 25, 50, "custom"];
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: "SET_BILL_AMOUNT", payload: value });
  };

  const handlePersonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: "SET_PERSON_COUNT", payload: value });
  };

  const handleTipSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const percentage = e.currentTarget.getAttribute("data-percentage") ?? "";
    dispatch({ type: "SET_TIP_PERCENTAGE", payload: percentage });
  };

  const handleCustomTipChange = (e: ChangeEvent<HTMLInputElement>) => {
    const customPercentage = e.currentTarget.value;
    dispatch({ type: "SET_TIP_PERCENTAGE", payload: customPercentage });
  };

  const validateBillAmount = (billAmount: number | string) =>
    +billAmount < 0 ? "Bill amount cannot be less than 0" : "";

  const validatePersonCount = (personCount: number | string) => {
    if (+personCount < 1 && personCount != "") {
      return "Person count cannot be less than 1";
    } else if (+personCount % 1 > 0) {
      return "Person count cannot be in decimal";
    }
    return "";
  };
  return (
    <div className={styles.TipInputForm}>
      <NumberInput
        iconType="dollar"
        label="Bill"
        onChange={handleBillChange}
        errorMessage={validateBillAmount(state.billAmount)}
        value={state.billAmount}
      />
      <div className={styles.spacer1}></div>
      <SelectTip label="Select Tip %">
        {tipPercentages.map((percentage, index) => (
          <TipButton
            key={index}
            tipPercentage={percentage}
            onClick={handleTipSelect}
            customTipHandle={handleCustomTipChange}
            isSelected={+state.tipPercentage === percentage}
            customTip={state.tipPercentage}
          />
        ))}
      </SelectTip>
      <div className={styles.spacer2}></div>

      <NumberInput
        iconType="person"
        label="No of People"
        onChange={handlePersonChange}
        errorMessage={validatePersonCount(state.personCount)}
        value={state.personCount}
      />
    </div>
  );
};
