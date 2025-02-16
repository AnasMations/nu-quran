import { cn } from "@/app/utils/TailwindMerge";
import React from "react";
import BasicButton from "./BasicButton";
import UnderlinedText from "./UnderlinedText";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  const router = useRouter();

  return (
    <div className="h-16">
      <div
        className={cn(
          "fixed top-0 left-0 flex flex-row-reverse items-center justify-between w-screen bg-primary-100 h-16 md:px-48 px-12",
          className
        )}
      >
        <p
          className="text-2xl text-secondary-100 font-black cursor-pointer"
          onClick={() => router.push("/home")}
        >
          قرآن النيل
        </p>
        {children}
        <div className="flex flex-row gap-6">
          <UnderlinedText
            className="text-secondary-100"
            onClick={() => router.push("/sign")}
          >
            تسجيل الخروج
          </UnderlinedText>
          <UnderlinedText
            className="text-secondary-100"
            onClick={() => router.push("/dashboard")}
          >
            لوحة التحكم
          </UnderlinedText>
        </div>
      </div>
    </div>
  );
}
