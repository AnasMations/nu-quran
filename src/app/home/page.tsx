"use client";
import GoalContainer from "@/components/GoalContainer";
import Header from "@/components/Header";
import Leaderboard from "@/components/Leaderboard";

export default function Page() {
  return (
    <div className="flex flex-col items-center sm:px-48 px-12 justify-start h-screen">
      <Header className="" />
      <p className="w-full text-right text-3xl font-black mt-14 mb-7">لوحة الآداءات - شهر اكتوبر</p>
      <div className="flex justify-center w-full gap-14 xl:flex-row flex-col">
        <GoalContainer></GoalContainer>
        <Leaderboard className="w-full h-[480px]"></Leaderboard>
      </div>
    </div>
  );
}
