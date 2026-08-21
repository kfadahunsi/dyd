import type { TeamList } from "@/lib/types"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import TeamBadge from "./TeamBadge"
import { Calendar, User, Zap } from "lucide-react"

export default function TeamHistory({
  teams,
  isChampions = true,
}: {
  teams: TeamList
  isChampions?: boolean
}) {
  return (
    <div className="space-y-3 w-full">
      {teams.map((team) => {
        return (
          <Card
            key={`${team.year}-${team.name}`}
            className={`border shadow-2xs hover:shadow-sm transition-all bg-card overflow-hidden ${
              isChampions
                ? "border-amber-500/30 hover:border-amber-500/60"
                : "border-rose-500/30 hover:border-rose-500/60"
            }`}
          >
            <CardContent className="p-3.5 sm:p-4 flex items-center justify-between gap-4">
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={isChampions ? "default" : "destructive"}
                    className="font-mono text-xs font-bold"
                  >
                    <Calendar className="size-3 mr-1" />
                    {team.year}
                  </Badge>
                  <h4 className="font-bold text-foreground text-sm sm:text-base truncate">
                    {team.name}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="size-3" /> {team.manager}
                  </span>
                  {team.points !== 0 && (
                    <span className="flex items-center gap-1 font-mono font-semibold text-foreground">
                      <Zap className="size-3 text-amber-500" />
                      {team.points}
                      {team.name === "Loic Remy Boys" && "+"} pts
                    </span>
                  )}
                </div>
              </div>

              {team.img && (
                <TeamBadge src={team.img} alt={`${team.name} badge`} />
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
