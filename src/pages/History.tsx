import { useState } from "react";
import { championsList, relegationList } from "@/data/teams";
import TeamHistory from "@/components/TeamHistory";

const displayTeam = {
  champions: championsList,
  relegated: relegationList,
}


export default function History() {

  const [activeTeam,setActiveTeam] = useState<"champions"|"relegated">("relegated")


  function handleChampions(){
    setActiveTeam("champions")
  }

  function handleRelegated(){
    setActiveTeam("relegated")
  }

  return (
    <div className="flex flex-col mt-5 border-t-2 border-t-gray-200 gap-2">
      <div className="flex justify-evenly">
        <h4 className={`h4 cursor-pointer ${activeTeam === "champions" && "underline"}`} onClick={handleChampions}>Champions</h4>
        <h4 className={`h4 cursor-pointer ${activeTeam === "relegated" && "underline"}`} onClick={handleRelegated}>Relegated</h4>
      </div>
      <main className="flex flex-col items-center">
        <TeamHistory teams={displayTeam[activeTeam]}/>
      </main>
    </div>
  )
}
