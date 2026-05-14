import { getFinals, getGwStatus, getSemiResults, getSemis, getWinner } from "@/api/api-functions"
import type { Semis } from "@/lib/types"
import  {useEffect, useState } from "react"


export default function Knockout() {
    const [semiFinals, setSemiFinals] = useState<Semis|null>(null)
    useEffect(()=>{
        async function loadData(){
            try{
                const [semis, sResults, finals, winner] = await Promise.all(
                    [getSemis(), getSemiResults(), getFinals(), getWinner()]
                )

                            
                console.log(semis)
                setSemiFinals(semis)
                //console.log(sResults)
                //console.log(finals)
                //console.log(winner)

            }catch(err){
                console.error(err)
            }
        }
        loadData()
    }, [])
  return (
    <div className="border border-red-500 w-full h-full  flex flex-col items-center">
        <h3 className="h3">Knockout</h3>
        <div className="flex flex-col items-center w-full ">
            <h4 className="h4">Semi Finals</h4>
            {(semiFinals && semiFinals[1].home_score === null ) && 
            Object.entries(semiFinals).map(([semiId, semifinal])=>{
               return (<div className="flex justify-center gap-2 border-b-4" key={semiId}>
                <span className="w-45 text-center">{semifinal.home}</span>
                <span className="w-10 text-center">vs</span>
                <span className="w-45 text-center">{semifinal.away}</span>
                </div>)
            })}
            {}
            {semiFinals === null &&
            <div className="flex flex-col items-center ">
            <p>SF1: 1st Place vs 4th Place</p>
            <p>SF2: 2nd Place vs 3rd Place</p>
            </div>}
            <h4 className="h4">Finals</h4>
            <p>Winner SF1 vs Winner SF2</p>
        </div>
    </div>
  )
}
