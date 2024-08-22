import { useId } from "react";
import clsx from "clsx";
import "./NumberInput.module.css";
export interface NumberInputProps extends React.ComponentProps<"input"> {
  /**
   * Label of the Input
   */
  label: string;

  /**
   * Type of the icon
   */
  iconType: "person" | "dollar";

  /**
   * Error message that will be displayed on wrong input
   */
  errorMessage?: string;

  /**
   * Condition that returns true if the value is invalid otherwise false
   */
  isValidInput?: (value: number) => boolean;
}

const iconPaths = {
  dollar: "src/components/NumberInput/assets/input-icons/dollar-icon.svg",
  person: "src/components/NumberInput/assets/input-icons/person-icon.svg",
};

export const NumberInput = ({
  label,
  iconType,
  errorMessage,
  ...delegated
}: NumberInputProps) => {
  const uniqueId = useId();
  return (
    <div className="grid text-grey">
      <label
        className="text-[1.25rem] font-bold leading-[1.4] tracking-[0.1rem] md:text-[0.875rem]"
        htmlFor={`${uniqueId}-number-input`}
      >
        {label}
      </label>
      <div className="h-4 md:h-2"></div>
      <div className="relative">
        <input
          type="number"
          id={`${uniqueId}-number-input`}
          className={clsx("input", { "outline-error": errorMessage })}
          {...delegated}
        />
        <div className="absolute top-0 bottom-0 grid place-content-center left-[1.25rem]">
          <img
            src={iconPaths[iconType]}
            width={iconType === "dollar" ? 14 : 18}
            alt={`${iconType}-icon`}
          />
        </div>
      </div>
      <p className="min-h-[1.5rem] md:text-[0.9rem] text-error">
        {errorMessage}
      </p>
    </div>
  );
};
