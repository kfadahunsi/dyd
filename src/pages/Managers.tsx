import ManagerBadge from "@/components/ManagerBadge"
import TeamBadge from "@/components/TeamBadge"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle, } from "@/components/ui/card"

import { managerList } from "@/data/lists"
import { Bird } from "lucide-react"


export default function Managers() {
    
  return (
    <div className="flex flex-col items-center overflow-y-auto mt-5 pt-3 gap-5 border-2 border-t-gray-200">
        {managerList.map((manager)=>{
            return <div key={manager.name} className="w-10/12 lg:w-5/12">
                        <Card className="border border-red-100">
                            <CardHeader>
                                <CardTitle>{manager.name}</CardTitle>
                                <CardDescription>{manager.acronym}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="lg:flex lg:justify-between">
                                    <div>
                                        <div>
                                            <ManagerBadge src={manager.managerImg} alt={`${manager.name} profile`}/>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                <p>Current Club: {manager.club}</p>
                                                <p>Established: {manager.est}</p>
                                                <div className="flex items-center">
                                                    <Bird/>
                                                    <a 
                                                        href={manager.twitter} 
                                                        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                                                    target="blank_"
                                                    >{`${manager.teamAcronym} on Twitter`}
                                                    </a>
                                                </div>
                                            </div>
                                            <TeamBadge src={manager.badgeImage} alt={`${manager.name} badge`}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="h4">Manager History</h4>
                                        {manager.formerClubs.map((formerClub)=>{
                                            return(
                                                <div key={`${formerClub.name} ${formerClub.est}`} className="mt-5">
                                                    <p className="font-semibold border-b border-red-300">{formerClub.name}</p>
                                                    <p className="pt-2">est: {formerClub.est}</p>
                                                    <p>Join Reason: {formerClub.reason}</p>
                                                    <p>Status: {formerClub.status}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
        })}
    </div>
  )
}
