import type { TeamList } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function TeamHistory({teams}: {teams: TeamList}) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto items-center pt-3 gap-5">
        {teams.map((team)=>{
            return (
                <div key={team.year} className="w-11/12">
                    <Card className="">
                        <CardHeader>
                            <CardTitle>{team.year}: {team.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Manager: {team.manager}</p>
                        </CardContent>
                    </Card>
                </div>)
        })}
    </div>
  )
}
