import { cn } from "@/app/utils/TailwindMerge";
import React from "react";

interface Props {
  label: string;
  placeholder: string;
  className?: string;
  type?: string;
}

export default function InputField({ label, placeholder, className, type }: Props) {
  return (
    <div className="flex flex-col items-end gap-3 w-full">
      <label className="text-lg text-primary-100 font-bold">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className={cn(
          "px-4 py-2 w-full rounded-lg text-lg text-right border outline-secondary-100 border-primary-100 bg-white text-primary-100 placeholder:text-primary-50",
          className
        )}
      >
      </input>
    </div>
  );
}
