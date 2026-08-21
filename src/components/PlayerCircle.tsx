import { premList } from "@/data/lists"
import type { Team } from "@/lib/types"



export default function PlayerCircle({team}:{team: Team}) {
  const teamColors = premList[team] || { primary: "bg-muted", secondary: "bg-muted-foreground" }
    
  return (
    <div className={`${teamColors.primary} w-5 h-5 rounded-full relative border border-border shadow-2xs shrink-0 overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${teamColors.secondary} w-full h-1.5 rotate-45 rounded-full`}></div>
      </div>
    </div>
  )
}
