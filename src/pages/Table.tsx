
import { getTable } from "@/api/api-functions"
import type { TableObj } from "@/lib/types"
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
      {table &&       
      <table className=" table-auto  border-collapse w-11/12 h-72 lg:w-8/12 ">
        <thead>
          <tr className="border-b bg-red-400">
            <th>Rank</th>
            <th className="border-l ">Team</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(table).map(([teamName, teamData], index)=>(
              <tr key={teamName} className={`border-b ${index%2 === 0 ? "": "bg-red-200"}`} >
                <td className="text-center">{teamData.rank_sort}</td>
                <td className="border-l text-center ">{teamName}</td>
                <td className=" text-center ">{teamData.total}</td>
              </tr>
            ))}
        </tbody>
      </table>}
    </div>
  )
}









