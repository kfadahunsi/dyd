
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
    <div className="prose h-full w-full pt-10 flex justify-center lg:justify-center">
      {table &&       
      <table className=" table-auto  border-collapse w-11/12 h-6/12 lg:w-8/12 lg:h-8/12">
        <thead className="bg-gray-500 h-18 text-amber-300">
          <tr>
            <th className="">Rank</th>
            <th>Team</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(table).map(([teamName, teamData])=>(
              <tr className="h-10" key={teamName}>
                <td className="border border-b-red-500 text-center bg-gray-100">{teamData.rank_sort}</td>
                <td className="border border-b-red-500 text-center  bg-blue-100">{teamName}</td>
                <td className="border border-b-red-500 text-center  bg-gray-100">{teamData.total}</td>
              </tr>
            ))}
        </tbody>
      </table>}
    </div>
  )
}









