import { Card, CardContent, CardDescription,  CardHeader, CardTitle, } from "@/components/ui/card"

import { teamList } from "@/data/teams"

export default function Teams() {
    
  return (
    <div className="flex flex-col items-center overflow-y-auto mt-5 pt-3 gap-5 border-2 border-t-gray-200">
        {teamList.map((team)=>{
            return <div key={team.name} className="w-10/12">
                        <Card>
                            <CardHeader>
                                <CardTitle>{team.name}</CardTitle>
                                <CardDescription>AKA: {team.acronym}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img className="h-30 mb-4" src={team.badgeImage}/>
                                <p>Manager: {team.manager}</p>
                            </CardContent>
                        </Card>
                    </div>
        })}
    </div>
  )
}
