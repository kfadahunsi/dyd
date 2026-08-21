import { countManager } from "@/lib/functions"
import type { TeamList } from "@/lib/types"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Trophy, TrendingDown } from "lucide-react"

const MANAGERS = [
  "Ademide Peters",
  "Afolabi Adebajo",
  "Fisayo Ayodeji",
  "Kolapo Akande",
  "Kola Fadahunsi",
  "Kevwe Fadahunsi",
]

export default function HistoryCounter({
  teams,
  team,
}: {
  teams: TeamList
  team: "champions" | "relegated"
}) {
  const isChampions = team === "champions"

  // 1. Calculate count for each manager and sort descending
  const managerCounts = MANAGERS.map((name) => ({
    name,
    count: countManager(name, teams),
  })).sort((a, b) => b.count - a.count)

  // 2. Find the highest count among all managers
  const maxCount = Math.max(...managerCounts.map((m) => m.count))

  // 3. Compute sports ranking (tied managers get the same rank number)
  let currentRank = 1
  const rankedManagers = managerCounts.map((manager, index) => {
    if (index > 0 && manager.count < managerCounts[index - 1].count) {
      currentRank = index + 1
    }
    return {
      ...manager,
      rank: currentRank,
      isTop: manager.count === maxCount && maxCount > 0,
    }
  })

  return (
    <Card className="border border-border bg-card shadow-sm w-full">
      <CardHeader className="pb-3 border-b border-border bg-muted/20">
        <div className="flex items-center gap-2">
          {isChampions ? (
            <Trophy className="size-5 text-amber-500" />
          ) : (
            <TrendingDown className="size-5 text-rose-500" />
          )}
          <CardTitle className="text-base font-bold text-foreground">
            {isChampions ? "All-Time Titles Leaderboard" : "All-Time Relegation Counter"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2.5">
        {rankedManagers.map(({ name, count, rank, isTop }) => {
          return (
            <div
              key={name}
              className={`flex items-center justify-between p-2.5 rounded-xl border text-sm transition-colors ${
                isTop
                  ? isChampions
                    ? "bg-amber-500/15 border-amber-500/40 shadow-2xs"
                    : "bg-rose-500/15 border-rose-500/40 shadow-2xs"
                  : "bg-background/60 border-border/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`font-mono text-xs font-bold w-5 text-center ${
                    isTop
                      ? isChampions
                        ? "text-amber-600 dark:text-amber-400 font-extrabold"
                        : "text-rose-600 dark:text-rose-400 font-extrabold"
                      : "text-muted-foreground"
                  }`}
                >
                  #{rank}
                </span>
                <span className={`font-semibold ${isTop ? "text-foreground font-bold" : "text-foreground"}`}>
                  {name}
                </span>
              </div>
              <Badge
                variant={
                  isTop
                    ? isChampions
                      ? "default"
                      : "destructive"
                    : count > 0
                    ? "secondary"
                    : "outline"
                }
                className={`font-mono font-bold text-xs ${
                  isTop && isChampions
                    ? "bg-amber-500 text-black hover:bg-amber-600"
                    : ""
                }`}
              >
                {count} {count === 1 ? (isChampions ? "title" : "relegation") : (isChampions ? "titles" : "relegations")}
              </Badge>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
