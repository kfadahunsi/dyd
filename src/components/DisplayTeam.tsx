import { useEffect, useState } from "react"
import PlayerCircle from "./PlayerCircle"
import { getLeagueTeams } from "@/api/api-functions"
import type { ClubLineups } from "@/lib/types"
import { Spinner } from "./ui/spinner"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent, CardTitle } from "./ui/card"



export default function DisplayTeam() {

    const [leagueTeamList, setLeagueTeamList] = useState<ClubLineups | null>(null)

     useEffect(()=>{
        async function loadLeagueTeams(){
            const teams = await getLeagueTeams()
            //console.log(teams)
            setLeagueTeamList(teams)
        }

        loadLeagueTeams()
    }, []) 

  return (
    <div className="w-full mt-5 flex flex-col items-center">
        <h3 className="h3 mb-5">Lineups</h3>
        {leagueTeamList ? 
        <Carousel className="w-9/12 lg:w-8/12 " opts={{loop: true}}>
            <CarouselContent>
                {Object.entries(leagueTeamList).map(([name, team])=>{
                    return(
                        <CarouselItem className="lg:basis-1/3 " key={name}>
                            <Card className="bg-green-400">
                                <CardTitle className="w-full flex  justify-center">{name}</CardTitle>
                                <h4 className="h4">
                                    Total Points: {team.filter((_player, index)=>(index < 11 )).reduce((acc, player)=>{
                                        return acc+ player.stats.total_points
                                    }, 0)}
                                </h4>
                                <CardContent>
                                    <h4>Starters</h4>
                                    {team.map((player, index)=>{
                                    return(
                                    <div key={`${player.basic.name} starter`} className="flex gap-2 items-center justify-evenly">
                                        {index < 10 &&<>
                                            <div className="w-1/12">
                                                <PlayerCircle team={player.basic.team}/>
                                            </div>
                                            <h4 className="h4 lg:truncate w-4/12 whitespace-normal" title={player.basic.name}>{player.basic.name}</h4>
                                            <p className="w-1/12">{player.basic.position}</p>
                                            <p className="w-1/12">{player.basic.team}</p>
                                            <p className="rounded-full bg-white w-5 text-center">{player.stats.total_points}</p>
                                        </>}
                                    </div>)})}
                                    <h4>Subs</h4>
                                    {team.map((player, index)=>{
                                    return(
                                    <div key={`${player.basic.name} sub`} className="flex gap-2 items-center justify-evenly">
                                        {index > 10 &&<>
                                            <div className="w-1/12">
                                                <PlayerCircle team={player.basic.team}/>
                                            </div>
                                            <h4 className="h4 truncate w-4/12" title={player.basic.name}>{player.basic.name}</h4>
                                            <p className="w-1/12">{player.basic.position}</p>
                                            <p className="w-1/12">{player.basic.team}</p>
                                            <p className="rounded-full bg-white w-5 text-center">{player.stats.total_points}</p>
                                        </>}
                                    </div>)})}

                                </CardContent>
                            </Card>
                        </CarouselItem>
                    )
            })}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel> : <Spinner/>}
    </div>
  )
}
