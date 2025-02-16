"use client";
import BasicContainer from "@/components/BasicContainer";
import GoalContainer from "@/components/GoalContainer";
import Header from "@/components/Header";
import Leaderboard from "@/components/Leaderboard";
import { useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(60);
  return (
    <div className="flex flex-col items-center sm:px-48 px-12 justify-start h-screen">
      <Header className="" />
      <p className="w-full text-right text-3xl font-black mt-14 mb-7">
        لوحة التحكم
      </p>
      <div className="absolute -z-10 bg-secondary-100 w-full h-[250px]"></div>
      <div className="flex flex-col gap-10 w-full">
        <BasicContainer className="w-full h-[120px] flex flex-row-reverse items-start justify-start gap-6">
          <div className="flex flex-col justify-end items-end w-fit text-nowrap">
            <p className="text-2xl text-primary-100 font-black cursor-pointer">
              جمادي اخر
            </p>
            <p className="text text-primary-100 font-black cursor-pointer">
              الاسبوع الثاني
            </p>
          </div>
          <div className="flex items-end justify-end bg-secondary-50 w-full h-10 rounded-3xl">
            <div
              className="bg-secondary-150 h-10 rounded-3xl transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </BasicContainer>
      </div>
    </div>
  );
}
