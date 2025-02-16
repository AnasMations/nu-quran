"use client";
import BasicContainer from "@/components/BasicContainer";
import GoalContainer from "@/components/GoalContainer";
import Header from "@/components/Header";
import Leaderboard from "@/components/Leaderboard";
import { useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(60);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "عمر خالد",
      group: "مجموعة حلمى",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      totalPoints: 12,
    },
    {
      id: 2,
      name: "محمد حلمى",
      group: "مجموعة حلمى",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      totalPoints: 100,
    },
    {
      id: 3,
      name: "انس احمد",
      group: "مجموعة ادهم",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
      totalPoints: 60,
    },
  ]);

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
        <BasicContainer className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-primary-100">
                <th className="p-2 text-right">مجموع الشهر</th>
                <th className="p-2 text-center">دعوة عضو</th>
                <th className="p-2 text-center">تحضير خاطرة</th>
                <th className="p-2 text-center">حضور خاطرة</th>
                <th className="p-2 text-center">قراءة</th>
                <th className="p-2 text-center">تسميع</th>
                <th className="p-2 text-right">المجموعة</th>
                <th className="p-2 text-right">الاسم</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-primary-100/20">
                  <td className="p-2 text-right">{student.totalPoints} نقطة</td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-2 text-right">{student.group}</td>
                  <td className="p-2 text-right flex items-center justify-end gap-2">
                    {student.name}
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </BasicContainer>
      </div>
    </div>
  );
}
