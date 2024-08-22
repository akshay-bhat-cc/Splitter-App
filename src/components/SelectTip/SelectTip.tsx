import React from "react";

export interface SelectTipProps {
  // Add your props here
  label: string;
  children: React.ReactNode;
}

export const SelectTip = ({ label, children }: SelectTipProps) => {
  return (
    <div className="grid gap-6">
      <span className="tracking-[0.1rem] font-bold text-[1.25rem] text-grey md:text-[0.875rem]">
        {label}
      </span>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 lg:grid-rows-3 lg:grid-cols-2 md:grid-rows-3 md:grid-cols-2 md:gap-4">
        {children}
      </div>
    </div>
  );
};
