import { cn } from "@/app/utils/TailwindMerge";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function UnderlinedText({ children, className, onClick }: Props) {
  
  return (
    <button 
    onClick={onClick}
    className={cn("underline underline-offset-8 hover:no-underline", className)}>
      {children}
    </button>
  );
}
