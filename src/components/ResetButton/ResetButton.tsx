import React from "react";
import clsx from "clsx";

export interface ResetButtonProps extends React.ComponentProps<"button"> {
  /**
   * Label of the button
   */
  label: string;

  /**
   * If the button is selected, it will apply the selected styles
   */
  isSelected: boolean;
}

export const ResetButton = ({
  label,
  isSelected,
  ...delegated
}: ResetButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-[#0d686d] text-[#00474b] font-bold text-[1.5rem] tracking-[0.1em] border-none rounded-md py-[13px] transition duration-100 ease-linear md:text-[1.25rem]",
        { "bg-teal": isSelected }
      )}
      {...delegated}
    >
      {label}
    </button>
  );
};
