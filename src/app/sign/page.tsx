"use client";
import BasicButton from "@/components/BasicButton";
import BasicContainer from "@/components/BasicContainer";
import InputField from "@/components/InputField";
import StylizedSideThing from "@/components/StylizedSideThing";
import UnderlinedText from "@/components/UnderlinedText";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [currentState, setCurrentState] = useState<"signup" | "signin">("signin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    }
  }, [router, isLoggedIn]);

  return (
    <div className="flex items-center justify-end p-4 h-screen">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-[500px] flex-col items-center justify-center">
          <p className="text-5xl font-black mb-14">قرآن النيل</p>

          {currentState === "signup" && (
          <BasicContainer className="w-full gap-6">
            <InputField label="الاسم الكامل" placeholder="الاسم الكامل" />
            <InputField
              label="البريد الإلكتروني"
              placeholder="البريد الإلكتروني"
            />
            <InputField type="password" label="كلمة السر" placeholder="كلمة السر" />
            <div className="mt-2 flex flex-col items-end justify-center gap-4 w-full">
              <BasicButton onClick={() => setIsLoggedIn(true)}>انشاء حساب</BasicButton>
              <UnderlinedText onClick={() => setCurrentState("signin")}>لديك حساب بالفعل؟</UnderlinedText>
            </div>
            </BasicContainer>
          )}

          {currentState === "signin" && (
            <BasicContainer className="w-full gap-6">
              <InputField
                label="البريد الإلكتروني"
                placeholder="البريد الإلكتروني"
              />
              <InputField type="password" label="كلمة السر" placeholder="كلمة السر" />
            <div className="mt-2 flex flex-col items-end justify-center gap-4 w-full">
              <BasicButton onClick={() => setIsLoggedIn(true)}>تسجيل الدخول</BasicButton>
              <UnderlinedText onClick={() => setCurrentState("signup")}>ليس لدي حساب</UnderlinedText>
            </div>
            </BasicContainer>
          )}

        </div>
      </div>
      <div className="w-2/3 hidden xl:block" />
      <StylizedSideThing className="hidden xl:block" />
    </div>
  );
}
