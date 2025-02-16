import { cn } from "@/app/utils/TailwindMerge";
import React, { useEffect, useState } from "react";
import BasicContainer from "./BasicContainer";
import { getLeaders } from "@/app/actions";

interface Props {
  className?: string;
}

export default function Leaderboard({ className }: Props) {
  const [leaders, setLeaders] = useState<any[]>([]);

  useEffect(() => {
    getLeaders().then(setLeaders);
  }, []);

  return (
    <BasicContainer className={cn("w-full overflow-hidden", className)}>
      <div className="flex items-end justify-between gap-8">
        {leaders.map((leader) => (
          <LeaderboardItem key={leader.rank} rank={leader.rank} name={leader.name} points={leader.points} />
        ))}
      </div>
      <div className="w-full border border-primary-100"></div>
    </BasicContainer>
  );
}

interface LeaderboardItemProps {
  rank: number;
  name: string;
  points: number;
}

function LeaderboardItem({ rank, name, points }: LeaderboardItemProps) {
  const height = `${(points / 100) * 200}px`;
  const bgColor = rank === 1 ? "bg-secondary-150" : rank <= 3 ? "bg-secondary-200" : "bg-secondary-300";


  return (
    <div className="flex flex-col items-center justify-between gap-2 font-bold">
      <p>{name}</p>
      <div 
        className={`w-20 rounded-t-xl border-primary-100 border-2 border-b-0 flex items-center justify-center p-2 ${bgColor}`}
        style={{ height }}
      >
        <p className="font-semibold">{points}</p>
      </div>
    </div>
  );
}