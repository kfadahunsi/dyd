import type { TeamList } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import TeamBadge from "./TeamBadge"

export default function TeamHistory({teams}: {teams: TeamList}) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto items-center pt-3 gap-5">
        {teams.map((team)=>{
            return (
                <div key={team.year} className="w-11/12 lg:w-5/12">
                    <Card className="border-yellow-500 border">
                        <CardHeader>
                            <CardTitle>{team.year}: {team.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row justify-between">
                           <div>
                             <p>Manager: {team.manager}</p>
                            {team.points != 0 && <p>Points: <span className="text-red-400">{team.points}</span></p>}
                           </div>
                           <div>
                            {team.img !== "" && <TeamBadge src={team.img} alt={`${team.name} badge`}/>}
                           </div>
                        </CardContent>
                    </Card>
                </div>)
        })}
    </div>
  )
}
