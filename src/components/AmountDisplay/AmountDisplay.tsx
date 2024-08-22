export interface AmountDisplayProps {
  label: string;
  amount: number;
  decimals?: number;
}

export const AmountDisplay = ({
  label,
  amount,
  decimals = 2,
}: AmountDisplayProps) => {
  const formattedAmount = amount ? amount.toFixed(decimals) : "--";

  return (
    <div className="flex justify-between md:p-[13px]">
      <div className="flex flex-col justify-center md:text-[0.7657375rem] md:leading-[2.75rem]">
        <span className="text-white font-normal text-[1.25rem] leading-[1.875rem] tracking-[0.1rem] md:text-[0.7657375rem] md:leading-[1.125rem] md:tracking-[0.1rem]">
          {label}
        </span>
        <span className="text-muted-teal font-normal text-[1.25rem] leading-[1.875rem] md:text-[0.7657375rem] md:leading-[1.125rem] md:tracking-[0.1rem] ">
          / person
        </span>
      </div>

      <div>
        <span className="font-bold text-[3rem] text-right text-teal md:text-[2rem]">
          ${formattedAmount}
        </span>
      </div>
    </div>
  );
};
