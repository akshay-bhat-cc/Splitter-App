import React from "react";
import styles from "./TipCalculator.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { SelectTip } from "../SelectTip/SelectTip";
import { TipButton } from "../TipButton/TipButton";

export interface TipCalculatorProps {}

export const TipCalculator = () => {
  return (
    <div className={styles.tipCalculator}>
      <NumberInput iconType="dollar" label="Bill"></NumberInput>
      <SelectTip label="Select Tip %">
        <TipButton tipPercentage={5}></TipButton>
        <TipButton tipPercentage={10}></TipButton>
        <TipButton tipPercentage={15}></TipButton>
        <TipButton tipPercentage={25}></TipButton>
        <TipButton tipPercentage={50}></TipButton>
        <TipButton tipPercentage="custon"></TipButton>
      </SelectTip>
      <NumberInput iconType="person" label="No of People"></NumberInput>
    </div>
  );
};
