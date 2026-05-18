import { getFinals, getSemiResults, getSemis, getWinner } from "@/api/api-functions"
import type { Finals, SemiResults, Semis, Winner } from "@/lib/types"
import  {useEffect, useState } from "react"


export default function Knockout() {
    const [semiFinals, setSemiFinals] = useState<Semis|null>(null)
    const [semiResults, setSemiResults] = useState<SemiResults|null>(null)
    const [finalists, setFinalists] = useState<Finals|null>(null)
    const [champion, setChampion] = useState<Winner|null>(null)

    const date =  new Date()
    const year = date.getFullYear()

    useEffect(()=>{
        async function loadData(){
            try{
                const [semis, sResults, finals, winner] = await Promise.all(
                    [getSemis(), getSemiResults(), getFinals(), getWinner()]
                )

                            
                console.log(semis)
                setSemiFinals(semis)
                setSemiResults(sResults)
                setFinalists(finals)
                setChampion(winner)
                //console.log(semiResults)
                //console.log(finals)
                //console.log(winner)

            }catch(err){
                console.error(err)
            }
        }
        loadData()
    }, [])
  return (
    <div className="border border-red-500 w-full flex flex-col items-center">
        <h3 className="h3">Knockout</h3>
        <div className="flex flex-col items-center w-full ">
            <div className="flex flex-col items-center mb-5">
                <h4 className="h4">Semi Finals</h4>
                {(semiFinals && !semiResults ) && 
                Object.entries(semiFinals).map(([semiId, semifinal])=>{
                return (<div className="flex justify-center gap-2 border-b-4" key={semiId}>
                    <span className="w-45 text-center">{semifinal.home}</span>
                    <span className="w-10 text-center">vs</span>
                    <span className="w-45 text-center">{semifinal.away}</span>
                    </div>)
                })}
                {semiResults &&
                Object.entries(semiResults).map(([semiId, semiResult] )=>{
                    return (<div className="flex justify-center gap-2 border-b-4" key={semiId}>
                    <span className="w-45 text-center">{semiResult.home}</span>
                    <span className="w-10 text-center">{semiResult.home_score}</span>
                    <span className="w-10 text-center">-</span>
                    <span className="w-10 text-center">{semiResult.away_score}</span>
                    <span className="w-45 text-center">{semiResult.away}</span>
                    </div>)
                })}
                {semiFinals === null &&
                <div className="flex flex-col items-center ">
                <p>SF1: 1st Place vs 4th Place</p>
                <p>SF2: 2nd Place vs 3rd Place</p>
                </div>}
            </div>
            <div className="flex flex-col items-center ">
                <h4 className="h4">Finals</h4>
                {!finalists && <p>Winner SF1 vs Winner SF2</p>}
                {(finalists && finalists.home.score === null) && 
                <div className="flex justify-center gap-2 border-b-4">
                    <span className="w-45 text-center">{finalists.home.name}</span>
                    <span className="w-10 text-center">vs</span>
                    <span className="w-45 text-center">{finalists.away.name}</span>
                </div>
                }
                {(finalists && finalists.home.score !== null) &&
                <div className="flex justify-center gap-2 border-b-4" >
                    <span className="w-45 text-center">{finalists.home.name}</span>
                    <span className="w-10 text-center">{finalists.home.score}</span>
                    <span className="w-10 text-center">-</span>
                    <span className="w-10 text-center">{finalists.away.score}</span>
                    <span className="w-45 text-center">{finalists.away.name}</span>
                </div>
                }
            </div>
            {champion && <p className="mt-10">The DYD Cup Champion for {year-1}/{year} is {champion.name} who scored {champion.score} points in the final GW! 🎉</p>}
        </div>
    </div>
  )
}
