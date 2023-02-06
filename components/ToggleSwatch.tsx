import { ToggleButton } from "react-aria-components";
import { swatchCls } from "./consts";

export default function ToggleSwatch({
  onChange,
  isSelected,
  label,
  backgroundColor,
  className,
}: {
  onChange: (value: boolean) => void;
  isSelected: boolean;
  label?: string;
  backgroundColor?: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <ToggleButton
        isSelected={isSelected}
        onChange={onChange}
        aria-label={label}
        className={`${
          swatchCls.outer
        } border-2 ring-2 rounded-full bg-white focus:outline-none ring-transparent focus:ring-slate-300  ${
          isSelected ? "border-sky-500" : "border-slate-300"
        }`}
      >
        <div
          style={{ backgroundColor }}
          className={`${className || "bg-slate-500"} ${swatchCls.inner}`}
        ></div>
      </ToggleButton>
      {label && <span className="text-xl text-slate-700">{label}</span>}
    </div>
  );
}
