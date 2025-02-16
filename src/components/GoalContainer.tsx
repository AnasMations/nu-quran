"use client";
import { cn } from "@/app/utils/TailwindMerge";
import React, { useState } from "react";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  goal?: number;
  className?: string;
}

export default function GoalContainer({ children, className }: Props) {
  const [progress, setProgress] = useState(60);
  return (
    <div
      className={cn(
        "flex flex-col items-end justify-center min-w-[328px] w-[328px] h-fit bg-primary-100 p-8 rounded-2xl",
        className
      )}
    >
      <p className="text-3xl font-black text-white mb-7">هدف الشهر</p>
      <p className=" text-right text-white mb-7">
        في هذا الشهر الكريم، نسعى لجمع 5000 جنيه لمساعدة الأسر المحتاجة وتعزيز
        مشاريعنا الخيرية. التبرعات التي نجمعها ستذهب مباشرة في توفير الاحتياجات
        الأساسية وتحسين ظروف المعيشة للمتأثرين. نؤمن بأن كل مساهمة، مهما كانت
        بسيطة، تلعب دورًا كبيرًا في تحقيق هدفنا. شاركوا معنا في نشر الخير هذا
        الرمضان
      </p>
      <div className="flex items-end justify-end bg-secondary-50 w-full h-10 rounded-3xl">
        <div className="bg-secondary-150 h-10 rounded-3xl transition-all duration-300" style={{width: `${progress}%`}}></div>
      </div>
    </div>
  );
}
