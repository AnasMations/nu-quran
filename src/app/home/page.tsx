"use client";
import BasicContainer from "@/components/BasicContainer";
import GoalContainer from "@/components/GoalContainer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [currentState, setCurrentState] = useState<"signup" | "signin">(
    "signin"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    }
  }, [router, isLoggedIn]);

  return (
    <div className="flex flex-col items-center sm:px-48 px-12 justify-start h-screen">
      <Header className="" />
      <p className="w-full text-right text-3xl font-black mt-14 mb-7">لوحة الآداءات - شهر اكتوبر</p>
      <div className="flex justify-center w-full gap-14 xl:flex-row flex-col">
        <GoalContainer></GoalContainer>
        <BasicContainer className="w-full h-[480px]"></BasicContainer>
      </div>
    </div>
  );
}
