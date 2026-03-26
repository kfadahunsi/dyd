import { countManager } from "@/lib/functions";
import type { TeamList } from "@/lib/types";
import { Badge } from "./ui/badge";

export default function HistoryCounter({teams, team}: {teams: TeamList, team: string}) {
    const aa = countManager("Afolabi Adebajo", teams)
    const ap = countManager("Ademide Peters", teams)
    const fa = countManager("Fisayo Ayodeji", teams)
    const ka = countManager("Kolapo Akande", teams)
    const kf1 = countManager("Kola Fadahunsi", teams)
    const kf = countManager("Kevwe Fadahunsi", teams)

  return (
    <div className="mt-10">
        {team === "relegated" && <h2 className="h2"> Relegation Counter 🧮</h2>}
        {team === "champions" && <h2 className="h2"> Champions Counter 🧮</h2>}
        <div className="flex flex-col items-center gap-6 mt-10">
            <p>Ademide Peters: <Badge>{ap}</Badge></p>
            <p>Afolabi Adebajo: <Badge>{aa}</Badge></p>
            <p>Fisayo Ayodeji: <Badge>{fa}</Badge></p>
            <p>Kolapo Akande: <Badge>{ka}</Badge></p>
            <p>Kola Fadahunsi: <Badge>{kf1}</Badge></p>
            <p>Kevwe Fadahunsi: <Badge>{kf}</Badge></p>
        </div>
    </div>
  )
}
