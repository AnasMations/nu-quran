import { cn } from "@/app/utils/TailwindMerge";
import React from "react";

interface Props {
  className?: string;
  className2?: string;
}

export default function HalfCircle({ className, className2 }: Props) {
  return (
    <svg
      width="649"
      height="1341"
      viewBox="0 0 649 1341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.17076 661.89C-41.0733 34.2224 428.055 -30.3701 648.397 10L648.396 10.0009V1333.26C451.756 1371 47.4148 1289.56 3.17076 661.89Z"
        fill="#BEE663"
        className={className2}
      />
    </svg>
  );
}
