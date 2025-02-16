import { cn } from "@/app/utils/TailwindMerge";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BasicButton({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center font-bold text-lg bg-secondary-100 p-2 w-full rounded-lg hover:bg-secondary-150",
        className
      )}
    >
      {children}
    </button>
  );
}
