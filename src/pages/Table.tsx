
import { getTable } from "@/api/api-functions"
import { Spinner } from "@/components/ui/spinner"
import type { TableObj } from "@/lib/types"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"
import { useEffect, useState } from "react"

 export default function Table() {
  const [table, setTable] = useState<TableObj | null>(null)


  useEffect(()=>{
    async function loadTable(){
      const fetchedTable: TableObj = await getTable()
      setTable(fetchedTable)
      console.log(fetchedTable)
    }

    loadTable()
  }, [])
  
  return (
    <div className="prose h-full w-full pt-10 flex flex-col items-center lg:items-center">
      {table ?       
      <table className=" table-auto  border-collapse w-full h-72 lg:w-8/12 ">
        <thead>
          <tr className="border-b bg-league-table-header text-league-table-header-foreground">
            <th>Rank</th>
            <th className="border-l ">Team</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(table).map(([teamName, teamData], index)=>(
              <tr key={teamName} className={`border-b ${index%2 === 0 ? "bg-league-table-odds text-league-table-odds-foreground": "bg-league-table-evens text-league-table-evens-foreground"}`} >
                <td className="text-center flex items-center justify-center gap-1">{teamData.rank} {teamData.last_rank > teamData.rank ? <ArrowUp/> : teamData.last_rank < teamData.rank ? <ArrowDown/> : <Minus/>}</td>
                <td className="border-l text-center ">{teamName}</td>
                <td className=" text-center ">{teamData.total}</td>
              </tr>
            ))}
        </tbody>
      </table> : <Spinner/>}
    </div>
  )
}









