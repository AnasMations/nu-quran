import { cn } from "@/app/utils/TailwindMerge";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function BasicContainer({ children, className }: Props) {
  return (
    <div className={cn("flex flex-col items-center justify-center w-fit h-fit bg-accent-100 border border-primary-100 p-8 rounded-2xl", className)}>
      {children}
    </div>
  );
}
