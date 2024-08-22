import React, { ChangeEvent } from "react";
import clsx from "clsx";

export interface TipButtonProps extends React.ComponentProps<"button"> {
  tipPercentage: number | "custom";
  isSelected: boolean;
  customTip: number | string;
  customTipHandle: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TipButton = ({
  tipPercentage,
  customTipHandle,
  isSelected,
  customTip,
  ...delegated
}: TipButtonProps) => {
  return (
    <>
      {tipPercentage !== "custom" ? (
        <button
          className={clsx(
            "bg-[#00474b] text-[#feffff] text-[2rem] leading-[2rem] rounded-[0.375rem] font-bold text-center border-0 py-[14px] transition-colors ease-linear duration-100",
            { "bg-[#2cc0ae] text-[#00474b]": isSelected }
          )}
          {...delegated}
          data-percentage={tipPercentage}
        >
          {tipPercentage}%
        </button>
      ) : (
        <input
          type="number"
          className="bg-[#f3f8fb] text-[#5d6b6c] text-[1.5rem] leading-[2.25rem] w-full rounded-[0.375rem] font-bold text-center border-0 py-[14px] transition-colors ease-linear duration-100 focus-visible:outline focus-visible:outline-[0.125rem] focus-visible:outline-[#2cc0ae]"
          placeholder="Custom"
          onChange={customTipHandle}
          value={customTip}
        />
      )}
    </>
  );
};
