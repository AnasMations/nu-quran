import { cn } from "@/app/utils/TailwindMerge";
import React from "react";
import Image from "next/image";
import halfCircle from "@/assets/half-circle.svg";
import HalfCircle from "@/assets/HalfCircle";
import arabicLetters from "@/assets/arabic-letters.png";

interface Props {
  className?: string;
}

export default function StylizedSideThing({ className }: Props) {
  return (
    <div
      className={cn(
        "fixed flex justify-end right-0 -z-10 w-full h-full overflow-hidden",
        className
      )}
    >
      <HalfCircle 
        className="fixed right-0 animate-slide-up" 
        className2="fill-secondary-100" 
      />
      <HalfCircle
        className="fixed right-0 top-[80px] animate-slide-up-delayed"
        className2="fill-primary-100"
      />
      <Image
        src={arabicLetters}
        alt="arabic-letters"
        className="fixed -right-10 opacity-5 animate-slide-up-delayed"
      />
    </div>
  );
}
