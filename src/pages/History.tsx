import { useState } from "react"
import { championsList, relegationList } from "@/data/lists"
import TeamHistory from "@/components/TeamHistory"
import HistoryCounter from "@/components/HistoryCounter"
import { Trophy, TrendingDown, History as HistoryIcon } from "lucide-react"

const displayTeam = {
  champions: championsList,
  relegated: relegationList,
}

export default function History() {
  const [activeTeam, setActiveTeam] = useState<"champions" | "relegated">("champions")
  const isChampions = activeTeam === "champions"

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 space-y-6">
      {/* Header and Category Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <HistoryIcon className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            League History
          </h2>
        </div>

        {/* Segmented Tab Toggle */}
        <div className="inline-flex p-1 rounded-full bg-muted border border-border self-start sm:self-auto">
          <button
            onClick={() => setActiveTeam("champions")}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              isChampions
                ? "bg-amber-500 text-black shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Trophy className="size-3.5" /> Champions ({championsList.length})
          </button>
          <button
            onClick={() => setActiveTeam("relegated")}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              !isChampions
                ? "bg-rose-500 text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <TrendingDown className="size-3.5" /> Relegations ({relegationList.length})
          </button>
        </div>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {isChampions ? "🏆 Roll of Champions" : "📉 Wall of Relegations"}
            </h3>
            <span className="text-xs text-muted-foreground">Chronological</span>
          </div>
          <TeamHistory
            teams={displayTeam[activeTeam]}
            isChampions={isChampions}
          />
        </div>

        <div className="lg:col-span-5 sticky top-20">
          <HistoryCounter
            teams={displayTeam[activeTeam]}
            team={activeTeam}
          />
        </div>
      </div>
    </div>
  )
}
