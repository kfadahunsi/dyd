import { getFinals, getSemiResults, getSemis, getWinner } from "@/api/api-functions"
import { type Finals, type SemiResults, type Semis, type Winner } from "@/lib/types"
import  {useEffect, useState } from "react"
import { Spinner } from "./ui/spinner"


export default function Knockout() {
    const [loading, setLoading] = useState(false)
    const [semiFinals, setSemiFinals] = useState<Semis|null>(null)
    const [semiResults, setSemiResults] = useState<SemiResults|null>(null)
    const [finalists, setFinalists] = useState<Finals|null>(null)
    const [champion, setChampion] = useState<Winner|null>(null)

    const date =  new Date()
    const year = date.getFullYear()

    useEffect(()=>{
        async function loadData(){
            try{

                setLoading(true)
                const [semis, sResults, finals, winner] = await Promise.all(
                    [getSemis(), getSemiResults(), getFinals(), getWinner()]
                )

                setSemiFinals(semis)
                setSemiResults(sResults)
                setFinalists(finals)
                setChampion(winner)
                setLoading(false)

            }catch(err){
                console.error(err)
            }
        }
        loadData()
    }, [])
  return (
    <div className="border w-full flex flex-col items-center">
        <h3 className="h3">Knockout</h3>
        <div className="flex flex-col items-center w-full ">
            <div className="flex flex-col items-center mb-5">
                <h4 className="h4 mb-3">Semi Finals</h4>
                {loading ? <Spinner className="size-8"/> : (!loading &&semiFinals && !semiResults ) ? 
                Object.entries(semiFinals).map(([semiId, semifinal])=>{
                return (<div className="flex justify-center gap-2 border-b-4" key={semiId}>
                    <span className="w-40 text-center">{semifinal.home}</span>
                    <span className="text-center">vs</span>
                    <span className="w-40 text-center">{semifinal.away}</span>
                    </div>)
                }): (!loading && semiResults) ?
                Object.entries(semiResults).map(([semiId, semiResult] )=>{
                    return (<div className="flex justify-center gap-2 border-b-4" key={semiId}>
                    <span className="w-40 text-center">{semiResult.home}</span>
                    <span className="text-center">{semiResult.home_score}</span>
                    <span className="text-center">-</span>
                    <span className="text-center">{semiResult.away_score}</span>
                    <span className="w-40 text-center">{semiResult.away}</span>
                    </div>)
                }) : null}
                {(!semiFinals && !loading) &&
                <div className="flex flex-col items-center ">
                    <p>SF1: 1st Place vs 4th Place</p>
                    <p>SF2: 2nd Place vs 3rd Place</p>
                </div>}
            </div>
            <div className="flex flex-col items-center ">
                <h4 className="h4 mb-3">Finals</h4>
                {(!finalists && !loading) && <p>Winner SF1 vs Winner SF2</p>}
                {loading ? <Spinner/> : (!loading && finalists && finalists.home.score === null) ? 
                <div className="flex justify-center gap-2 border-b-4">
                    <span className="w-40 text-center">{finalists.home.name}</span>
                    <span className="text-center">vs</span>
                    <span className="w-40 text-center">{finalists.away.name}</span>
                </div> : (!loading && finalists && finalists.home.score !== null) ?
                <div className="flex justify-center gap-2 border-b-4" >
                    <span className="w-40 text-center">{finalists.home.name}</span>
                    <span className="text-center">{finalists.home.score}</span>
                    <span className="text-center">-</span>
                    <span className="text-center">{finalists.away.score}</span>
                    <span className="w-40 text-center">{finalists.away.name}</span>
                </div> : null}
            </div>
            {champion && <h2 className="h2 mt-10">The {year-1}/{year} DYD Cup Champion is {champion.name}🎉</h2>}
        </div>
    </div>
  )
}
