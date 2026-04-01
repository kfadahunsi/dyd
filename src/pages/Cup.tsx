import { getCupTable } from "@/api/api-functions"
import FixturesAndResults from "@/components/FixturesAndResults"
import type { CupTable } from "@/lib/types"
import { useEffect, useState } from "react"

export default function Cup() {
    const [cupTable, setCupTable] = useState<CupTable | null>(null)


    useEffect(()=>{
        async function loadCupTable() {
            const table = await getCupTable()
            //console.log(table)
            setCupTable(table)

        }
        loadCupTable()
    }, [])
    
  return (
    <div className="prose h-full w-full pt-10 flex flex-col items-center lg:items-center">
        {cupTable &&
        <div className=" w-full flex flex-col items-center">
            <table className="table-auto border-collapse h-72 w-full lg:w-8/12">
                <thead>
                    <tr className="border-b bg-cup-table-header text-cup-table-header-foreground">
                        <th className="w-3/12">Team</th>
                        <th className="border-l lg:w-1/12">P</th>
                        <th className="lg:w-1/12">W</th>
                        <th className="lg:w-1/12">D</th>
                        <th className="lg:w-1/12">L</th>
                        <th className="lg:w-1/12">PF</th>
                        <th className="lg:w-1/12">PA</th>
                        <th className="lg:w-1/12">PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(cupTable).map(([name, stats], index)=>{
                        return(
                            <tr key={name} className={`border-b ${index%2 === 0 ? "bg-cup-table-odds text-cup-table-odds-foreground": "bg-cup-table-evens text-cup-table-evens-foreground"}`}>
                                <td className="pl-2">{name}</td>
                                <td className="text-center border-l">{stats.played}</td>
                                <td className="text-center">{stats.wins}</td>
                                <td className="text-center">{stats.draws}</td>
                                <td className="text-center">{stats.losses}</td>
                                <td className="text-center">{stats.points_for}</td>
                                <td className="text-center">{stats.points_against}</td>
                                <td className="text-center">{stats.league_points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>}
        <FixturesAndResults/>
    </div>
  )
}
