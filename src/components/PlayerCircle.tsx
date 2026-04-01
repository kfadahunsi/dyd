import { premList } from "@/data/lists"
import type { Team } from "@/lib/types"



export default function PlayerCircle({team}:{team: Team}) {
    
  return (
    <div className={`${premList[team].primary} w-5 h-5 rounded-full relative border border-black`}>
        <div className="absolute inset-0 flex items-center justify-center ">
            <div className={`${premList[team].secondary} w-full h-2 rotate-45 rounded-r-full rounded-l-full`}></div>
        </div>
    </div>
  )
}
