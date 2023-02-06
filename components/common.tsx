import { cn } from "./utils";
import { FC, ReactNode } from "react";
// --------------------------------------------
// Container
// Props: label, children

export const Container: FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-6">{label}</h1>
      {children}
    </div>
  );
};

// --------------------------------------------
// Divider
// Props: className

export const Divider: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(className, `w-full h-1 my-10 rounded-full bg-slate-200`)}
    ></div>
  );
};
