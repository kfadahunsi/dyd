import { getFinals, getGwStatus, getSemiResults, getSemis, getWinner } from "@/api/api-functions"
import type { GwStatus } from "@/lib/types"
import  {useEffect, useState } from "react"


export default function Knockout() {
    const [knockouts, setKnockouts] = useState<"groups"|"semis"|"finals">("groups")
    const testArr =  [["SSFC", "ASA"],["DTF","MMUFC"]]
    
    useEffect(()=>{
        async function loadData(){
            const status: GwStatus = await getGwStatus()
            const semis = await getSemis()
            const sResults = await getSemiResults()
            const finals = await getFinals()
            const winner = await getWinner()

            console.log("here are the semi results ", semis)
            console.log("here are the semi results ", sResults)
            console.log("here are the finals ", finals)
            console.log("here is the winner ", winner)

            if(status.current_event === 34 && status.current_event_finished === true){
                //console.log("OK time to get the cup knockout displayed")
                setKnockouts("semis")
            }
            if(status.current_event === 37 && status.current_event_finished === true){
                //console.log("OK time to get the cup knockout displayed")
                setKnockouts("finals")
            }
        }
        loadData()
    }, [])
  return (
    <div className="border border-red-500 w-full h-full  flex flex-col items-center">
        <h3 className="h3">Knockout</h3>
        {knockouts === "semis" && 
        <div className="flex flex-col items-center w-full ">
            <h4 className="h4">Semi Finals</h4>
            {testArr.map((semifinal, index)=>{
               return (<div className="flex justify-center gap-2 border-b-4" key={index}>
                <span className="w-20 text-center">{semifinal[0]}</span>
                <span className="w-10 text-center">vs</span>
                <span className="w-20 text-center">{semifinal[1]}</span>
                </div>)
            })}
            <h4 className="h4">Finals</h4>
            <p>Winner SF1 vs Winner SF2</p>
        </div>}
        {knockouts === "groups" && 
        <div className="flex flex-col items-center ">
            <h4 className="h4">Semi Finals</h4>
            <p>SF1: 1st Place vs 4th Place</p>
            <p>SF2: 2nd Place vs 3rd Place</p>
            <h4 className="h4">Finals</h4>
            <p>Winner SF1 vs Winner SF2</p>
        </div>}
    </div>
  )
}
