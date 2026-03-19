import { getCupTable } from "@/api/api-functions"
import type { CupTable } from "@/lib/types"
import { useEffect, useState } from "react"

export default function Cup() {
    const [cupTable, setCupTable] = useState<CupTable | null>(null)


    useEffect(()=>{
        async function loadCupTable() {
            const table = await getCupTable()
            console.log(table)
            setCupTable(table)

        }
        loadCupTable()
    }, [])
    
  return (
    <div className="w-full h-full prose">
        {cupTable &&
        <table className="table-auto  border-collapse">
            <thead>
                <tr>
                    <td>Team</td>
                    <td>P</td>
                    <td>W</td>
                    <td>D</td>
                    <td>L</td>
                    <td>PF</td>
                    <td>PA</td>
                    <td>PTS</td>
                </tr>
            </thead>
            <tbody>
                {Object.entries(cupTable).map(([name, stats])=>{
                    return(
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{stats.played}</td>
                            <td>{stats.wins}</td>
                            <td>{stats.draws}</td>
                            <td>{stats.losses}</td>
                            <td>{stats.points_for}</td>
                            <td>{stats.points_against}</td>
                            <td>{stats.league_points}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>}
    </div>
  )
}
