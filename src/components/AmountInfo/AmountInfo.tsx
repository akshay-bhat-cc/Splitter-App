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
    <div className="bg-dark-teal rounded-[1rem] flex flex-col justify-between p-[56px] min-w-[566px] 2xl:min-w-0 md:p-[16px] md:gap-[58px]">
      <div className="grid gap-[64px] overflow-x-auto md:gap-[26.45px]">
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
