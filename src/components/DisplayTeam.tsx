import { useEffect, useState } from "react"
import PlayerCircle from "./PlayerCircle"
import { getLeagueTeams } from "@/api/api-functions"
import type { ClubLineups, Player, Team } from "@/lib/types"
import { Skeleton } from "./ui/skeleton"
import { ErrorCard } from "./ui/error-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Shield, Users } from "lucide-react"

function getPositionStyle(pos: string) {
  switch (pos) {
    case "GKP":
      return "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
    case "DEF":
      return "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20"
    case "MID":
      return "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    case "FWD":
      return "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20"
    default:
      return "text-muted-foreground bg-muted border-border"
  }
}

function PlayerRow({ player }: { player: Player }) {
  const isCap = player.general?.is_captain
  const isVice = player.general?.is_vice_captain

  return (
    <div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-muted/50 transition-colors text-xs sm:text-sm">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <PlayerCircle team={player.basic.team as Team} />
        <span
          className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${getPositionStyle(
            player.basic.position
          )}`}
        >
          {player.basic.position}
        </span>
        <span
          className="font-medium text-foreground truncate max-w-[130px] sm:max-w-[150px]"
          title={player.basic.name}
        >
          {player.basic.name}
        </span>
        {isCap && (
          <span className="text-[10px] font-extrabold px-1 rounded bg-amber-500 text-black">
            C
          </span>
        )}
        {isVice && (
          <span className="text-[10px] font-extrabold px-1 rounded bg-muted text-muted-foreground">
            V
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] text-muted-foreground font-mono">
          {player.basic.team}
        </span>
        <span className="inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-muted font-bold text-foreground text-xs">
          {player.stats.total_points}
        </span>
      </div>
    </div>
  )
}

export default function DisplayTeam() {
  const [leagueTeamList, setLeagueTeamList] = useState<ClubLineups | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadLeagueTeams() {
    try {
      setLoading(true)
      setError(null)
      const teams = await getLeagueTeams()
      setLeagueTeamList(teams)
    } catch (err) {
      console.error("Error fetching league teams:", err)
      setError("Unable to load team lineups. Please check your connection or retry in a moment.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadLeagueTeams()
  }, [])

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="size-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Gameweek Squads</h3>
        </div>
        <span className="text-xs text-muted-foreground">
          Swipe or use arrows to view all teams
        </span>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-96 rounded-2xl" />
          <Skeleton className="h-96 rounded-2xl hidden md:block" />
          <Skeleton className="h-96 rounded-2xl hidden lg:block" />
        </div>
      ) : error ? (
        <ErrorCard
          title="Lineups Unavailable"
          message={error}
          onRetry={loadLeagueTeams}
          isRetrying={loading}
        />
      ) : leagueTeamList ? (
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="flex items-center justify-end gap-2 mb-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
          <CarouselContent className="-ml-3">
            {Object.entries(leagueTeamList).map(([name, team]) => {
              const starters = team.slice(0, 11)
              const subs = team.slice(11)
              const totalStarterPoints = starters.reduce(
                (acc, player) => acc + (player.stats?.total_points || 0),
                0
              )

              return (
                <CarouselItem
                  className="pl-3 basis-full md:basis-1/2 lg:basis-1/3"
                  key={name}
                >
                  <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      {/* Team Card Header */}
                      <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base font-bold text-foreground">
                            {name}
                          </CardTitle>
                          <Badge variant="default" className="font-mono text-xs">
                            {totalStarterPoints} pts
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="p-3 space-y-3">
                        {/* Starting 11 */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            <Users className="size-3.5" />
                            <span>Starting XI</span>
                          </div>
                          <div className="space-y-0.5">
                            {starters.map((player) => (
                              <PlayerRow
                                key={`${player.basic.name}-starter`}
                                player={player}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Substitutes */}
                        {subs.length > 0 && (
                          <div className="pt-2 border-t border-border/60">
                            <div className="flex items-center gap-1.5 mb-1.5 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              <span>Bench</span>
                            </div>
                            <div className="space-y-0.5 opacity-80">
                              {subs.map((player) => (
                                <PlayerRow
                                  key={`${player.basic.name}-sub`}
                                  player={player}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="text-center py-8 text-muted-foreground text-sm">
          No team data available right now.
        </div>
      )}
    </div>
  )
}
